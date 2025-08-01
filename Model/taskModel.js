import mongoose from "mongoose"

const TaskSchema =  new mongoose.Schema({
    name:{
        type:String,
        default:true
    },
    task:{
        type:String,
        default:true
    },
    completed: { 
        type: Boolean, 
        default: false },
})

export default mongoose.model("task",TaskSchema)