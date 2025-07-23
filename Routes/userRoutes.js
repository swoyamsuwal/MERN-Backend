import express from "express"
import { create, getAllUsers, getUserById, updateUserById } from "../Controller/userController.js"
const route = express.Router();
route.post("/user",create)
route.get("/usersdata",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/update/user/:id",updateUserById)
export default route;