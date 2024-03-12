import { Schema, model } from "mongoose";
const RequestSchema = new Schema(
  {
    serviceOffer: {
      type: String,
      required: true,
      maxlenght: 40,
    },
    experience: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    criminalRecord: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Request = model("Request", RequestSchema);
export default Request;