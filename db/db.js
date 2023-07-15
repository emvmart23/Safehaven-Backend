import mongoose from "mongoose";

const conection = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/apinotes`, {
      useNewUrlParser: true,
    });
    console.log(`conectado al puerto {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};

export { conection };
