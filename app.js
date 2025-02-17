import express from "express";
import "dotenv/config";
import routesTasks from "./routes/tasks.js";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/tasks", routesTasks);
try {
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, () => console.log("Server is running in PORT: " + PORT));
} catch (error) {
  console.log(error);
}
process.on("SIGINT", async () => {
  dbClient.closeConnection;
  process.exit(0);
});
