import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
    });
    await newUser.setPassword(req.body.password);
    await newUser.save();
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }

    res.send(`user ${user.username} delete`);
  } catch (err) {
    next(err);
  }
};

export const login = (req, res, next) => {
  try {
    const { email, password } = req.body;

    const currentEmail = User.findOne({ email });

    if (!currentEmail) {
      res.status(401).json({ err: "invalid email or passwors" });
    }

    const validatePassword = User.validPassword(password);

    if (!validatePassword) {
      res.status(401).json({ message: `Incorrect password` });
    }
  } catch (err) {
    next(err);
  }
};
