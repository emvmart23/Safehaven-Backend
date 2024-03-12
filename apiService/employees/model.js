import mongoose, { Schema, model } from "mongoose";
const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 40,
  },
  imagePath: {
    type: String,
    required: true,
  },
  nameService: {
    type: String,
    required: true,
  },
  infoPersonal: {
    type: String,
    required: true,
  },
  cellphone: {
    type: number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true});

const Employee = model("Employee", EmployeeSchema);
export default Employee;