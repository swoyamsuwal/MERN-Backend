import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./Routes.js"
import cors from "cors"
import passport from "passport";
import "./config/passport.js"; // must import for passport to work

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(passport.initialize());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
      console.log(`Server is running on ${PORT}`)
    })
  })
  .catch((error)=> console.Console.log(error))

app.use("/api",route)