import express from "express"
import { create, getAllUsers, getUserById } from "../Controller/userController.js"
const route = express.Router();
route.post("/user",create)
route.get("/usersdata",getAllUsers)
route.get("/user/:id",getUserById)
export default route;