const express=require('express');
const router=express.Router();
const authenticateToken=require("../middleware/auth");
const authorizeAdmin=require("../middleware/admin");

const orderController=require("../mvc/order mvc/controller/orderController");
router.post("/",authenticateToken,orderController.postOrder);
module.exports=router;