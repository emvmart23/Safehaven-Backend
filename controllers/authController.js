import User from "../models/User.js";
import bcrypt, { hash } from "bcrypt";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) return res.status(404).json({ error: "registered email" });

  const salt = await bcrypt.genSalt(10);
  const hashingPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name: name,
    email: email,
    password: hashingPassword,
  });

  try {
    const saveUser = await user.save();
    res.json({
      error: null,
      data: saveUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  
};
