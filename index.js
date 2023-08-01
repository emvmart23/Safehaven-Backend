import express from 'express';
import bodyParser from 'body-parser';
import conection from './db/db.js';
import ErrorHandler from './midlewares/ErrorHandler.js';
import cors from 'cors'
import notaRouter from './routes/nota.js'

const app = express();

conection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/notas', notaRouter);
app.use(ErrorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Conectado al puerto http://localhost:${PORT}`);
});