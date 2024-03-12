import { verifyToken } from "../helpers/generatorToken.js";

export const checkAuth = async (req, res, next) => { 
  try {
    const token = req.headers.authorization.split(' ').pop()
    const { data } = await verifyToken(token);
    if (data.id) {
      req.user = data
      next();
    }else {
      return res.status(409)
    }
  } catch (error) {
    next(error) 
  }
};