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

	var sql = 'USE ' + database + ';';

	connection.query(sql, (err, result) => {

		if (err) {
			console.error('Erro ao selecionar o banco de dados:', err.message);
			return;
		}

		console.log('Banco de dados selecionado com sucesso');
			  
	});

	//Ler o csv e inserir os dados no banco de dados
    const fs = require('fs');
    const csv = require('csv-parser');

    const file = "src/DB/users.csv";

    fs.createReadStream(file).pipe(csv()).on('data', (row) => {
        console.log(row);
        console.log(row.NOME);
        console.log(row['NOME']);
        console.log(row.EMAIL);
        console.log(row['EMAIL']);
        var sql = 'INSERT INTO users (name, email) VALUES ("' + row.NOME + '", "' + row.EMAIL + '");';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao inserir dados:', err.message);
                return;
            }
            console.log('Dados inseridos com sucesso');
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        connection.end();
    });
  
});