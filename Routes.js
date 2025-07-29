import express from "express";
import passport from "passport";
import { authenticateJWT } from "./middleware/auth.js";
import "./config/passport.js";
const route = express.Router();

// ================= TASK CONTROLLER =================
import { createTasks, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "./Controller/taskController.js";

route.post("/task",authenticateJWT, createTasks);
route.get("/taskdata",authenticateJWT, getAllTasks);
route.get("/task/:id",authenticateJWT, getTaskById);
route.put("/update/task/:id",authenticateJWT, updateTaskById);
route.delete("/delete/task/:id",authenticateJWT, deleteTaskById);

// ================= USER CONTROLLER =================
import { login ,signup ,googleCallback } from "./Controller/userController.js";
// Auth routes
route.post("/auth/login", login);
route.post("/signup", signup);

// Google OAuth routes
route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",  
  })
);

route.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

export default route;
