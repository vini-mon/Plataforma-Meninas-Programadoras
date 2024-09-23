const { connectDB } = require('./dbConnection');

// console.log('Host:', process.env.DB_HOST);

const dropDatabase = async () => {
  try {
    const connection = await connectDB(); // Garante que a conexão esteja pronta

    const sql = 'DROP DATABASE IF EXISTS nome_do_banco';

    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao apagar banco de dados:', err.message);
      } else {
        console.log('Banco de dados apagado com sucesso');
      }
    });

    // Não feche a conexão aqui se você quiser reutilizá-la
  } catch (err) {
    console.error('Erro ao conectar e dropar o banco:', err.message);
  }
};

dropDatabase();
