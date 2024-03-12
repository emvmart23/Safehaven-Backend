import { Schema, model } from "mongoose";
const UserScheme = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String
    },
    role: {
      type: String,
      default: "user"
    },
  },
  { timestamps: true }
);

const User = model("User", UserScheme);
export default User;