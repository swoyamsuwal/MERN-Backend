import taskModel from "../model/taskModel.js";

export const create = async (req, res) => {
  try {
    const newTask = new taskModel(req.body);
    const savedData = await newTask.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async(req,res)=>{
  try{
    const TaskData= await taskModel.find();
    if(!TaskData || TaskData.length===0){
      return res.status(404).json({message:"User data not found."});
    }
    res.status(200).json({ TaskData });
  }catch(error){
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async(req,res)=>{
  try{
        const id = req.params.id;
        const taskExist = await taskModel.findById(id);
        if (!taskExist){
          return res.status(400).json({message:"User not found."});
        }
        res.status(200).json({ taskExist });
  }catch(error){ 
  res.status(500).json({errorMessage: error.message});
}
};

export const updateUserById = async(req,res)=>{
  try{
        const id = req.params.id;
        const taskExist = await taskModel.findById(id);
        if (!taskExist){
          return res.status(400).json({message:"User not found."});
        }
        const UpdatedData = await taskModel.findByIdAndUpdate(id, req.body,{
          new:true
        })
        res.status(200).json(UpdatedData);
  }
  catch (error){
    res.status(500).json({errorMessage:error.message});
  }
}

export const deleteUserById = async(req,res) => {
  try{
        const id = req.params.id;
        const taskExist = await taskModel.findById(id);
        if (!taskExist){
          return res.status(400).json({message:"User not found."});
        }
        await taskModel.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted User"});
  }
  catch (error){
    res.status(500).json({errorMessage:error.message});
  }
}