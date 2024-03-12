import User from "./model.js";
import { compare, encryption } from "../../helpers/handleBycript.js";
import { generateAccesToken } from "../../helpers/generatorToken.js";

export const register = async (req, res, next) => {
  const { name, username, lastname, email, password } = req.body;

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

    const passwordCorrect =
      user === null ? false : await compare(password, user.password);

    if (!(user && passwordCorrect)) {
      res.status(401).json({
        error: "invalid user or parsword",
      });
    }

    const { accessToken, refreshToken } = await generateAccesToken(user);

    if (passwordCorrect){
      res.status(200).json({
        user: user,
        access: accessToken,
        refresh: refreshToken,
      });
    }
    
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    let user = await User.findByIdAndUpdate(id, data, { new: true });

    res.json(user).status(200)
  } catch (error) {
    next(error);
  }
};
