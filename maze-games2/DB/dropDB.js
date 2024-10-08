const mysql = require('mysql2');

const host = "localhost";
const user = "root";
const password = "root";
const database = "maze_games";

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ' + err.stack);
        return;
    }
    console.log('Conectado ao MySQL com sucesso.');

    // Comando SQL para apagar o banco de dados
    var sql = `DROP DATABASE IF EXISTS ${database}`;

    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao apagar o banco de dados:', err.message);
            return;
        }
        console.log('Banco de dados apagado com sucesso');
    });

    // Fechar a conexão
    connection.end();
});