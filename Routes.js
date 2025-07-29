import express from "express";
import { authenticateJWT } from "./middleware/auth.js";
const route = express.Router();

// ================= TASK CONTROLLER =================
import { createTasks, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "./Controller/taskController.js";

route.post("/task",authenticateJWT, createTasks);
route.get("/taskdata",authenticateJWT, getAllTasks);
route.get("/task/:id",authenticateJWT, getTaskById);
route.put("/update/task/:id",authenticateJWT, updateTaskById);
route.delete("/delete/task/:id",authenticateJWT, deleteTaskById);

// ================= USER CONTROLLER =================

import { login ,signup} from "./Controller/userController.js";

route.post("/auth/login", login);
route.post("/signup",signup );

export default route;
