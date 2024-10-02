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
    var sql = 'CREATE DATABASE IF NOT EXISTS ' + database + ';';
    
    connection.query(sql, (err, result) => {

		if (err) {
			console.error('Erro ao criar banco de dados:', err.message);
			return;
		}
		
		console.log('Banco de dados criado com sucesso');
      
    });

	var sql = 'USE ' + database + ';';

	connection.query(sql, (err, result) => {

		if (err) {
			console.error('Erro ao selecionar o banco de dados:', err.message);
			return;
		}

		console.log('Banco de dados selecionado com sucesso');
			  
	});

	var sql = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255));';

	connection.query(sql, (err, result) => {

		if (err) {
			console.error('Erro ao criar tabela users:', err.message);
			return;
		}

		console.log('Tabela users criada com sucesso');

	});

	// insert admin user

	const bcrypt = require('bcryptjs');
	const password = bcrypt.hashSync('admin', 10);

	var sql = 'INSERT INTO users (name, email, password) VALUES ("admin", "admin@admin.com", "' + password + '");';

	connection.query(sql, (err, result) => {

		if (err) {
			console.error('Erro ao inserir usuário admin:', err.message);
			return;
		}

		console.log('Usuário admin inserido com sucesso');

	});

    // Fechar a conexão
    connection.end();
  
});
