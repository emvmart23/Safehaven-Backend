import User from "../models/User.js";
import { compare, encryption } from "../helpers/handleBycript.js";
import { generateAccesToken } from "../helpers/generatorToken.js";

export const register = async (req, res, next) => {
  const { name, username, lastname, email, password, location } = req.body;

  try {
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist)
      return res.status(404).json({ error: "registered email" });

    const hashingPassword = await encryption(password);

    const user = new User({
      name: name,
      lastname: lastname,
      email: email,
      username: username,
      password: hashingPassword,
      location: location,
    });
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

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await compare(password, user.password);

    const tokenSession = await generateAccesToken(user);

    if (!validPassword) res.status(409).json({ message: "invalid password" });

    if (validPassword)
      res.status(409).json({
        data: user,
        token: tokenSession,
      });
  } catch (error) {
    next(error);
  }
};
