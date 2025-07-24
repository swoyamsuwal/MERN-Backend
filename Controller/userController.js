import userModel from "../model/userModel.js";

export const login = async (req,res) =>{

}

export const signup = async (req, res) => {
  try {
    const { email, ...rest } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errorMessage: "Email already exists." });
    }
    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({ errorMessage: "Only Gmail addresses are allowed." });
    }
    const newUser = new userModel({ email, ...rest });
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
