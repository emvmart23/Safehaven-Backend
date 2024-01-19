import jwt from "jsonwebtoken";

function generateAccesToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const key = process.env.KEY_SECRET;

  const options = { expiresIn: "5h" };

  return jwt.sign(payload, key, options);
}

function validationToken(token) {
  const key = process.env.KEY_SECRET;
  try {
    const decoded = jwt.verify(token, key);
    return { succes: true, data: decoded };
  } catch (error) {
    return { succes: false, messsage: messsage.error };
  }
}

export { generateAccesToken, validationToken };
