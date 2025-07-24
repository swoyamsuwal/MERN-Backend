import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../model/userModel.js";


const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({ errorMessage: "Only Gmail addresses are allowed." });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errorMessage: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
