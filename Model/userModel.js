import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

//here user name is anohter
export default mongoose.model("test",userSchema)