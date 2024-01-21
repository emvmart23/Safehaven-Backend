import jwt from "jsonwebtoken";

export const generateAccesToken = async (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const key = process.env.KEY_SECRET;

  const options = { expiresIn: "5h" };

  return jwt.sign(payload, key, options);
};

export const verifyToken = async (token) => {
  const key = process.env.KEY_SECRET;
  try {
    const decoded = jwt.verify(token, key);
    return { succes: true, data: decoded };
  } catch (error) {
    return { succes: false, message: error };
  }
};

