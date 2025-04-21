create database cursos1;
use cursos1;

CREATE TABLE cursos1
(
	id 				INT AUTO_INCREMENT PRIMARY KEY,
    idcategoria 	INT 			NOT NULL,
    titulo 			VARCHAR(100) 	NOT NULL,
    duracion 		VARCHAR(50) 	NOT NULL,
    nivel 			ENUM('Básico', 'Intermedio', 'Avanzado') NOT NULL DEFAULT 'Básico',
    precio			DECIMAL(7,2) 	NOT NULL,
    fechas 			VARCHAR(100) 	NOT NULL,
    creado			DATETIME 		NOT NULL DEFAULT NOW()
)ENGINE = INNODB;
    
INSERT INTO cursos1 (idcategoria, titulo, duracion, nivel, precio, fechas) VALUES
	(1, 'Álgebra Básica', '3 meses', 'Básico', 150.00, 'Enero - Marzo'),
    (2, 'Literatura Clásica', '4 meses', 'Intermedio', 200.00, 'Febrero - Mayo'),
    (3, 'Programación en Python', '6 meses', 'Avanzado', 300.00, 'Marzo - Agosto');
select * from cursos1;