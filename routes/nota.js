import express from "express";
import {
  createNote,
  showNote,
  updateNote,
  deleteNote,
  notes,
  filePdf,
} from "../controllers/noteController.js";
import { register, login } from "../controllers/authController.js"

const router = express.Router();

router.get("/notes", notes);
router.get('/showNote/:id',showNote)
router.post("/create", createNote);
router.post("/register", register);
router.post("/login", login)
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);
// router.delete("/deleteuser/:id", deleteUser)
router.post("/pdf",filePdf)

export default router;
