import bcrypt from "bcrypt";

export const compare = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

export const encryption = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hash = await bcrypt.hash(password, salt);
  return hash;
};


