const express=require('express');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
//user/test
// router.get('/test',(req,res)=>{
//     res.send('heloo i am user route text displayed');
// })
//register page h ye niche
router.get('/register',(req,res)=>{
    res.render('register');
})
router.post('/register',
    body('email').trim().isEmail().isLength({min:10}),
    body('username').trim().isLength({min:5}),
    body('password').trim().isLength({min:6}),
    async(req,res)=>{
    // const {username,email,password}=rq.body;
    const errors=validationResult(req);
    if(!(errors.isEmpty())){
        return res.status(400).json({
            errors:errors.array(),
            message:"invalid data",
        })
    }
    const{username,password,email}=req.body;
    const hashPassword=await bcrypt.hash(password,10)
    const userdata=await userModel.create({
        email,
        username,
        password:hashPassword
    })
    res.json(userdata);
})
router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',
    body('username').trim().isLength({min:5}),
    body('password').trim().isLength({min:6}),
 async(req,res)=>{
    const errors=validationResult(req);
    if(!(errors.isEmpty())){
        return res.status(400).json({
            error:errors.array(),
            message:'invalid data',
        })
    }
    const{username,password}=req.body;
    const user=await userModel.findOne({
        username:username,
    })
    if(!user){
        return res.status(400).json({
            message:"username or password is incorrect",
        })
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({
            message:"username or password is incorrect",
        })
    }
    const token=jwt.sign({
        userId:user._id,
        email:user.email,
        password:user.password,
    },process.env.JWT_SECRET)
    res.cookie('token',token);
    res.send('logged in');
 }
)
module.exports=router;