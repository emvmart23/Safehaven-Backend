import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const { password } = req.body;
    const newUser = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
    });
    newUser.setPassword(password);
    await newUser.save();
    return res.status(201).json({ msg: "User Registration Successfull." });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {``
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Either email or password field is empty" });

    const currentUser = await User.findOne({ email: email });

    if (!currentUser)
      return res.status(400).json({ message: "User not found." });

    const isPasswordValid = await currentUser.validPassword(password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password." });

    return res.status(200).json({ msg: "Logged In !!" });
  } catch (err) {
    next(err);
  }
};
