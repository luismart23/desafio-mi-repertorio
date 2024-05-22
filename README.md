# Libros DB

## Requisitos
- Versión de Node.js 20.11 / 21.2

## Instalaciones previas

```sh
npm install
```

Levantar servidor
```sh
npm run start
```

## Frontend
Para visualizar el sitio web visite: `http://localhost:3000`

## Tablas creadas en:

database/queries.sql
```sql
DROP TABLE IF EXISTS LIBROS;

CREATE TABLE LIBROS (
	ID VARCHAR PRIMARY KEY,
	NOMBRE VARCHAR NOT NULL,
	PRECIO INT CHECK(PRECIO >= 0),
	AUTOR VARCHAR NOT NULL
);

SELECT * FROM LIBROS;

-- seeders
INSERT INTO LIBROS (ID, NOMBRE, PRECIO, AUTOR) VALUES 
[
{
"id": 1,
"titulo": "TOXICITY",
"artista": "SYSTEM OF A DOWN",
"tono": "BM"
},
{
"id": 2,
"titulo": "Nada nuevo bajo el sol",
"artista": "Los Bunkers",
"tono": "dm"
},
{
"id": 4,
"titulo": "Back To School",
"artista": "Deftones",
"tono": "bm"
}
]