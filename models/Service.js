import mongoose, { Schema, model } from "mongoose";
const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 40,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{ timestamps: true});

const Service = model("service", ServiceSchema);
export default Service;