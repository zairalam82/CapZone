const express=require('express');
const authenticateToken=require("../middleware/auth");
const authorizeAdmin=require("../middleware/admin");
const router=express.Router();

const productsController=require("../mvc/products mvc/controller/productsController");
router.get("/",productsController.getAllProducts);
router.post("/",authenticateToken,authorizeAdmin,productsController.postProducts);

router.put("/:product_id",authenticateToken,authorizeAdmin,productsController.updateToProducts);
router.delete("/",authenticateToken,authorizeAdmin,productsController.deleteProduct);

module.exports=router;