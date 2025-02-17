import { ObjectId } from "mongodb";
import Task from "../schemas/tasks.js";
import mongoose from "mongoose";

class tasksModel {
  async create(task) {
    return await Task.create(task);
  }
  async getAll() {
    return await Task.find();
  }
  async getOne(id) {
    return await Task.findById({ _id: new mongoose.Types.ObjectId(id) });
  }
  async update(id, task) {
    return await Task.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      task,
      { new: true }
    );
  }
  async delete(id) {
    return await Task.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export default new tasksModel();
