import userModel from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const { email } = newUser;

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    const savedData = await newUser.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async(req,res)=>{
  try{
    const userData= await userModel.find();
    if(!userData || userData.length===0){
      return res.status(404).json({message:"User data not found."});
    }
    res.status(200).json({ userData });
  }catch(error){
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async(req,res)=>{
  try{
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        if (!userExist){
          return res.status(400).json({message:"User not found."});
        }
        res.status(200).json({ userExist });
  }catch(error){ 
  res.status(500).json({errorMessage: error.message});
}
}