const mongoose=require('mongoose');

function connectTodb(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("db connected to nodejs");
    })
    .catch((error)=>{
        console.log("failed to connect databse",err);
    })
}
module.exports=connectTodb;