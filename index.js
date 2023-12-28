import bodyParser from "body-parser";
import conection from './db/db.js';
import cors from 'cors'
import express from 'express';
import errorHandler from './midlewares/errorHandler.js';
import notaRouter from './routes/nota.js'
const app = express();
conection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api', notaRouter);
app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Conectado al puerto http://localhost:${PORT}`);
});