import express from "express";
import {
  createNote,
  showNote,
  updateNote,
  deleteNote,
  notes,
  filePdf,
} from "../controllers/noteController.js";
import { register } from "../controllers/authController.js"

const router = express.Router();


// endpoint from user auth 
router.post("/register", register);
// router.post("/login", login)

// endpoint from api Notas
router.get("/notes", notes);
router.get('/showNote/:id',showNote)
router.post("/create", createNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

// endpoint to generate pdf
router.post("/pdf",filePdf)

export default router;
