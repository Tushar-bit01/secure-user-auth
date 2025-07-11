const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[5,"username must be atleast 5 Characters long"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[10,"email must be atleast 10 Characters long"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:[6,"password must be atleast 6 Characters long"]
    },
})
const user=mongoose.model("user",userSchema);
module.exports=user;