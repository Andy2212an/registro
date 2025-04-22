const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cursos1'  // Cambiado a la base de datos correcta
});

conexion.connect((error) => {
  if (error){
    console.error(`Error en la conexión: ${error}`);
    return;
  }

  console.log(`Conectado correctamente al servidor`);
});

module.exports = conexion;
