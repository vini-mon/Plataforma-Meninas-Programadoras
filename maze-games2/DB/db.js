const mysql = require('mysql2');

let connection;

const host = "localhost";
const user = "root";
const password = "root";
const database = "maze_games";

const connectDB = () => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      connection = mysql.createConnection({
        host: host,
        user: user,
        password: password
      });

      connection.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao MySQL: ' + err.stack);
          reject(err);
        } else {
          console.log('Conectado ao MySQL com sucesso.');
          resolve(connection);
        }
      });
    } else {
      // Se já houver uma conexão, resolvemos imediatamente
      resolve(connection);
    }
  });
};

// Exportando a função de conexão
module.exports = { connectDB };
