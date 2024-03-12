import Service from "../models/Service.js";

export const createService = async (req, res, next) => {
  try {
    const service = new Service(req.body);
    await service.save();
    return res.status(201).json({ message: "Created require" });
  } catch (error) {
    next(error);
  }
};

export const services = async (req, res, next) => {
  try {
    const services = await Service.find(req.body)
    res.json(services)
  }catch(error){
    next(error)
  }
}

