import 'dotenv/config'
import express from 'express'
import cancionesRoutes from './routes/cancion.route.js';
import cors from 'cors'
import { handleError } from './database/errors.js';

const app = express();

// Recordar tener versión mínima de node.js 20.11
const __dirname = import.meta.url

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use('/api/v1/canciones', cancionesRoutes);

app.use((err, req, res, next) => {
    const { code, msg } = handleError(err);
    res.status(code).json({ error: msg });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});