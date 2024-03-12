import Service from "../services/model.js";

export const createService = async (req, res, next) => {
  const  { name } = req.body
  const user = req.user
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const service = new Service({
      name: name,
      userId: user.id
    });

    await service.save();
    return res.status(201).json({ message: "Service created" });
  } catch (error) {
    next(error);
  }
};