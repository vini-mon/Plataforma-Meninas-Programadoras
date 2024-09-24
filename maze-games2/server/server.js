const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');

console.log('Iniciando servidor Node.js');

const app = express();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maze_games',
});

app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Ajuste para ambiente de desenvolvimento
}));

// Verificar login
app.get('/api/check-login', (req, res) => {
    if (req.session.loggedIn) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

// Rota para login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();

        if (rows.length === 0) {
            return res.json({ success: false, message: 'Usuário não encontrado' });
        }

        const user = rows[0];

        // Verifica se o usuário já tem uma senha
        if (!user.password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const updateSql = 'UPDATE users SET password = ? WHERE email = ?';
            await pool.query(updateSql, [hashedPassword, email]);
            req.session.loggedIn = true;
            req.session.user = user;
            return res.json({ success: true, message: 'Senha definida com sucesso!' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({ success: false, message: 'Senha incorreta' });
        }

        req.session.loggedIn = true;
        req.session.user = user;
        res.json({ success: true });
    } catch (err) {
        console.error('Erro durante o login:', err);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// Rota para logout
app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        console.log('Sessão encerrada');
        if (err) {
            return res.json({ success: false, message: 'Erro ao sair' });
        }

        // res.json({ success: true, message: 'Logout realizado com sucesso' }); // Resposta em JSON
        res.redirect('/'); // Redireciona para a página de login
        
    });
});

app.use(express.static('src'));

// Corrigindo a porta do servidor Node.js para 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
