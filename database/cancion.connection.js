import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    allowExitOnIdle: true
});

(async () => {
    try {
        const client = await pool.connect();
        const time = await client.query('SELECT NOW()');
        console.log('Conexión exitosa a la base de datos:', time.rows[0].now);
        client.release(); // Liberar el cliente de la pool cuando ya no sea necesario
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();





