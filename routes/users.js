const express=require('express');
const router=express.Router();
const db=require('../config/db');


//Resitration
const registerController=require("../mvc/login mvc/controller/registerController");
router.post("/register",registerController.register);
module.exports=router;

//Login
const loginController=require("../mvc/login mvc/controller/loginController");
router.post("/login",loginController.login);
module.exports=router;

//Get all users
const getUsersController=require("../mvc/login mvc/controller/getUsersController");
router.get("/",getUsersController.getAllUsers);
module.exports=router;

// To logout the cookies
router.post("/logout",(req,res)=>{
    res.clearCookie("token");
    return res.status(200).json({
        message:"Logged out successfully."
    });
});

module.exports=router;