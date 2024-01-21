import { verifyToken } from "../helpers/generatorToken.js";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop()
    
    const { data } = await verifyToken(token);
    if (data._id) {
      next();
    }else {
      return res.status(409)
    }
  } catch (error) {
    console.log(error);
  }
};
