import express from "express";
import {
  createNote,
  showNote,
  updateNote,
  deleteNote,
  notes,
  filePdf,
} from "../controllers/noteController.js";
import { checkAuth } from "../midlewares/auth.js";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// endpoint from user authentication
router.post("/register", register);
router.post("/login", login);

// endpoint from api Notas
router.get("/notes", checkAuth, notes);
router.get("/showNote/:id", checkAuth, showNote);
router.post("/create", checkAuth, createNote);
router.put("/update/:id", checkAuth, updateNote);
router.delete("/delete/:id", checkAuth, deleteNote);

// endpoint to generate pdf
router.post("/pdf", checkAuth, filePdf);

export default router;
