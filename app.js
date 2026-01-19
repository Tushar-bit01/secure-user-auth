const express=require('express');
const userRoute=require('./routes/user.routes');
const router=require('./routes/index.routes');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
const connectTodb=require('./config/db');
dotenv.config();
connectTodb();
const app=express();
app.set('view engine','ejs');//ejs created
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);
app.use('/user',userRoute);
app.listen(3000,()=>{
    console.log("server started");
})