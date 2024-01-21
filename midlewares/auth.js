import { verifyToken } from "../helpers/generatorToken.js";

export const checkAuth = async (req, res, next) => {
  const currentDataUser = req.headers.authorization;

  try {
    if (!currentDataUser)
      return res.status(403).json({ message: "Access denied" });
    const token = req.headers.authorization.split(" ").pop();
    const decoded = await verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token");
  }
};
