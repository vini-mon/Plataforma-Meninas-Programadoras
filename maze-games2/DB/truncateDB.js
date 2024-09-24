const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'maze_games'
});

connection.connect((err) => {

	if (err) throw err;

	table = 'users';

	// Excluindo usuários com idade menor que 18
	// const sql = 'DELETE FROM ' + table + ' WHERE 1 = 1';

	// connection.query(sql, (err, result) => {
	//   if (err) throw err;
	//   console.log(`${result.affectedRows} registros foram deletados.`);
	// });

	const sql = 'TRUNCATE TABLE ' + table;

	connection.query(sql, (err, result) => {

		if (err) throw err;
		console.log('Tabela logs truncada com sucesso.');

	});

	connection.end();
});