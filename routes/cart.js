//This is my cart route 
const express=require('express');
const router=express.Router();
const authenticateToken=require("../middleware/auth"); //ye abhi rehta hy bana hy 

//post route
const cartController=require("../mvc/cart mvc/controller/cartController");
router.post('/',authenticateToken,cartController.addToCart); //agar token valid hy to controller ko req jaye gi
//for get we will use the same controller cartController
router.get("/",authenticateToken,cartController.getFromCart);
//for delete we will also use the same cartController\
router.delete("/",authenticateToken,cartController.deleteFromCart);
//for update we will also use the same cartController
router.put("/",authenticateToken,cartController.putToCart);

module.exports=router;


