import Nota from "../models/Nota.js";

export const createNote = async (req, res, next) => {
  try {
    const noti = new Nota(req.body);
    await noti.save();
    res.send(noti);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const notes = async (req, res, next) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch(error) {
    res.status(500).send(error);
  }
};

export const showNote = async (req, res, next) => {
  try{
      const notas = await Nota.findById(req.params.id);
      res.json(notas)
  }catch{
      res.status(404).json({ msg: "note not found" });
  } 
}

export const updateNote = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    let nota = await Nota.findByIdAndUpdate(id, updateData, options);

    if (!nota) {
      return res.status(404).json({ msg: "note does not exist" });
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
    res.status(500).json({ message: error.message });
  }
};


