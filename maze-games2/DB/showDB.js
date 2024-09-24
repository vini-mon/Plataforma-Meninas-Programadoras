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

    // Comando SQL para criar o banco de dados
    var sql = 'SHOW DATABASES;';

    connection.query(sql, (err, result) => {

        if (err) {
            console.error('Erro ao mostrar os bancos de dados:', err.message);
            return;
        }

        console.log('Bancos de dados:');
        console.log(result);

    });

    var sql = 'USE ' + database + ';';

    connection.query(sql, (err, result) => {
            
        if (err) {
            console.error('Erro ao selecionar o banco de dados:', err.message);
            return;
        }

        console.log('Banco de dados selecionado com sucesso');

    });

    var sql = 'SHOW TABLES;';

    connection.query(sql, (err, result) => {

        if (err) {

            console.error('Erro ao mostrar as tabelas:', err.message);
            return;

        }

        console.log('Tabelas:');
        console.log(result);

    });

    var sql = 'SELECT * FROM users;';

    connection.query(sql, (err, result) => {

        if (err) {

            console.error('Erro ao mostrar os usuários:', err.message);
            return;

        }

        console.log('Usuários:');
        console.log(result);

    });
        

    // Fechar a conexão
    connection.end();
  
});
