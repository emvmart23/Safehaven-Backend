import { Schema, model } from "mongoose";
const MySchema = new Schema({
  content: {
    type: String,
    required: true,
    maxlenght: 40,
  },
  important: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const NoteModal = model("apinote", MySchema);
export default NoteModal;
