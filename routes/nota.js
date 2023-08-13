import express from "express";
import {
  createNote,
  showNote,
  updateNote,
  deleteNote,
  notes,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/notes", notes);
router.get('/showNote/:id',showNote)
router.post("/create", createNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

export default router;
