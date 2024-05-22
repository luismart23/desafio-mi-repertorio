DROP TABLE IF EXISTS canciones; 

CREATE TABLE canciones (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    tono VARCHAR(20) NOT NULL,
    UNIQUE (titulo, artista)
);


SELECT * FROM canciones;