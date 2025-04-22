const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Ruta principal que obtiene todos los cursos
router.get('/', (req, res) => {
  conexion.query("SELECT * FROM cursos1", (error, results) => {  // Cambié "vehiculos" por "cursos1"
    if (error){
      throw error;
    } else {
      res.render('index', { registros: results });
    }
  });
});

// Ruta para mostrar formulario de creación
router.get('/create', (req, res) => {
  res.render('create');
});

// Ruta para eliminar un curso por id
router.get('/delete/:id', (req, res) => {
  const id = req.params.id;  // Cambié idvehiculo por id para que coincida con el parámetro
  conexion.query("DELETE FROM cursos1 WHERE id = ?", [id], (error, results) => {  // Cambié "vehiculos" por "cursos1"
    if (error){
      throw error;
    } else {
      res.redirect('/');
    }
  });
});

// Ruta para mostrar formulario de edición con datos del curso
router.get('/edit/:id', (req, res) => {
  conexion.query("SELECT * FROM cursos1 WHERE id = ?", [req.params.id], (error, results) => {  // Cambié "vehiculos" por "cursos1"
    if (error){
      throw error;
    } else {
      res.render('edit', { cursos1: results[0] });
    }
  });
});

// Importar lógica CRUD
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;