import Nota from "../models/Nota.js";
import fs from "fs";
import PDFDocument from "pdfkit";

export const createNote = async (req, res, next) => {
  try {
    const noti = new Nota(req.body);
    await noti.save();
    res.send(noti);
  } catch (error) {
    next(error)
  }
};

export const notes = async (req, res, next) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (error) {
    next(error)
  }
};

export const showNote = async (req, res, next) => {
  try {
    const notas = await Nota.findById(req.params.id);
    res.json(notas);
  } catch {
    next(error)
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    let nota = await Nota.findByIdAndUpdate(id, updateData, options);

    if (!nota) {
      return res.status(404).json({ msg: "product does not exist" });
    }

    res.json(nota);
  } catch (error) {
    res.status(500).send("error");
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const id = req.params.id;

    const nota = await Nota.findByIdAndDelete(id);

    if (!nota) {
      return res.status(404).json({ msg: "note not found" });
    }

    res.send(`note ${nota.name} delete`);
  } catch (error) {
    next(error)
  }
};

export const filePdf = async (req, res) => {
  try {
    const nota = await Nota.find();

    if (!nota) {
      return res.status(404).json({ msg: "Nota not found" });
    }

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream("nota.pdf"));
    doc.fontSize(20).text("Detalles de la Nota", 100, 100);
    doc.fontSize(12).text(`Título: ${nota.content}`, 100, 150);
    doc.fontSize(12).text(`Contenido: ${nota.important}`, 100, 180);

    doc.end();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="nota.pdf"');

    const stream = fs.createReadStream("nota.pdf");
    stream.pipe(res);
  } catch (error) {
    next(error)
  }
};
