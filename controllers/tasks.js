import tasksModel from "../models/tasks.js";

class tasksController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await tasksModel.create(req.body);
      res
        .status(201)
        .json({ message: "Task created successfully", task: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await tasksModel.update(id, req.body);
      res
        .status(200)
        .json({ message: "Task updated successfully", task: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await tasksModel.delete(id);
      res
        .status(206)
        .json({ message: "Task deleted successfully", task: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async getAll(req, res) {
    try {
      const data = await tasksModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await tasksModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new tasksController();
