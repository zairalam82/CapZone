const express=require('express');
const authenticateToken=require("../middleware/auth");
const authorizeAdmin=require("../middleware/admin");
const router=express.Router();

const productsController=require("../mvc/products mvc/controller/productsController");
router.get("/",productsController.getAllProducts);
module.exports=router;