CREATE DATABASE programacionparaelfuturo;

USE programacionparaelfuturo;

CREATE TABLE usuarios(
    id INT(6) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(12) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE usuarios;