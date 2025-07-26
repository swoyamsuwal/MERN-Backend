import express from "express";
import { authenticateJWT } from "../middleware/auth.js";
const route = express.Router();

// ================= TASK CONTROLLER =================
import { createTasks, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "../Controller/taskController.js";

route.post("/task", createTasks);
route.get("/taskdata", getAllTasks);
route.get("/task/:id", getTaskById);
route.put("/update/task/:id", updateTaskById);
route.delete("/delete/task/:id", deleteTaskById);

// ================= USER CONTROLLER =================

import { login ,signup} from "../Controller/userController.js";

route.post("/auth/login", login);
route.post("/signup",signup );

export default route;
