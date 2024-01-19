import bodyParser from "body-parser";
import conection from "./db/db.js";
import cors from "cors";
import express from "express";
import errorHandler from "./midlewares/errorHandler.js";
import notaRouter from "./routes/nota.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
conection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/app", notaRouter);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Conectado al puerto http://localhost:${port}`);
});
