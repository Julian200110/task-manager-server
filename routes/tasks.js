import express from "express";
import tasksController from "../controllers/tasks.js";

const route = express.Router();
route.post("/create", tasksController.create);
route.get("/", tasksController.getAll);
route.get("/task/:id", tasksController.getOne);
route.put("/update/:id", tasksController.update);
route.delete("/delete/:id", tasksController.delete);

export default route;
