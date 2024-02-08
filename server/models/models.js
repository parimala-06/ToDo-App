import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

const models = mongoose.model("ToDo", toDoSchema);

export default models;
