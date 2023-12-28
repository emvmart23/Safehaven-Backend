import mongoose, { Schema, model } from "mongoose";
const MySchema = new Schema({
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

const Service = model("service", MySchema);
export default Service;