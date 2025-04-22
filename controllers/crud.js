const conexion = require('../database/db');

exports.save = (req, res) => {
  // Acceder a los datos enviados desde el formulario
  const { idcategoria, titulo, duracion, nivel, precio, fechas } = req.body;

  conexion.query(
    'INSERT INTO cursos1 SET ?',
    { idcategoria, titulo, duracion, nivel, precio, fechas },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    }
  );
};

exports.update = (req, res) => {
  // Acceder a los datos enviados desde el formulario
  const { id, idcategoria, titulo, duracion, nivel, precio, fechas } = req.body;

  conexion.query(
    'UPDATE cursos1 SET ? WHERE id = ?',
    [{ idcategoria, titulo, duracion, nivel, precio, fechas }, id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    }
  );
};
