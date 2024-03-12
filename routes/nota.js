import express from "express";
import { checkAuth } from "../midlewares/auth.js";
import { register, login, updateUser } from "../apiService/users/controller.js";
import { createService } from "../apiService/services/controller.js";

const router = express.Router();

// endpoint from user authentication
router.post("/auth/register", register);
router.post("/login", login);

//endpoint from user
router.patch("/users/update/:id", updateUser)

//endpoint from service
router.post("/create/service",checkAuth, createService)

export default router;
