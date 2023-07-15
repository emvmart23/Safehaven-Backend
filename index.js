import http from "http";
import express, { response } from "express";
import bodyParser from "body-parser";
import { conection } from "./db/db";
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

conection();

var notas = [
  {
    id: 3,
    content: "Repasar los retornos",
    date: "2019-05-07",
    important: false,
  },
  {
    id: 2,
    content: "Repasar los retornos",
    date: "2019-05-07",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>ddsds</h1>");
  ``;
});

app.get("/notas", (req, res) => {
  res.json(notas);
});

app.get("/api/notas/:id", (req, res) => {
  const id = Number(req.params.id);
  const nota = notas.find((nota) => nota.id === id);

  if (nota) {
    res.json(nota);
  } else {
    res.status(404);
  }
});

app.delete("/api/notas/:id", (req, res) => {
  const id = Number(req.params.id);
  const nota = notas.filter((notas) => notas.id != id);
  res.status(404).end();
});

app.post("/api/notas", (req, res) => {
  const nota = req.body;
  if (!nota || !nota.content) {
    return res.status(400);
    error: "note is missing";
  }

  const ids = notas.map((nota) => nota.id);
  const maxId = Math.max(...ids);

  const newNota = {
    id: maxId + 1,
    content: nota.content,
    important: typeof nota.important != "undefined" ? nota.important : false,
    date: new Date().toISOString(),
  };

  notas = [...notas, newNota];
  console.log(notas);
  res.json(newNota);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`conectado al puerto http://localhost:${PORT}`);
});
