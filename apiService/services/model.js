import mongoose, { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{ timestamps: true});

const Service = model("Service", ServiceSchema);
export default Service;

// Service.find().populate("userId").then(p => console.log("dsad",p))