import jwt from "jsonwebtoken";

export const generateAccesToken = async (user) => {
  const key = process.env.KEY_SECRET;
  const payload = {
    id: user.id,
    email: user.email,
  };

  const accessToken = jwt.sign(
    payload,
    key,
    { expiresIn: "5h" } 
  )

  const refreshToken = jwt.sign(
    payload,
    key,
    { expiresIn: "1d"  }
  )


  return { accessToken, refreshToken }
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


