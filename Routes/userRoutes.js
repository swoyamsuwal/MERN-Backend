import express from "express"
import { create, deleteUserById, getAllUsers, getUserById, updateUserById } from "../Controller/userController.js"
const route = express.Router();
route.post("/task",create)
route.get("/taskdata",getAllUsers)
route.get("/task/:id",getUserById)
route.put("/update/task/:id",updateUserById)
route.delete("/delete/task/:id",deleteUserById)
export default route;