const express=require('express');
const router=express.Router();
const authenticateToken=require("../middleware/auth");

const wishlistController=require("../mvc/wishlist mvc/controller/wishlistController");
router.get("/",authenticateToken,wishlistController.findWishlistItem);
router.post("/",authenticateToken,wishlistController.createWishlistItem);

router.put("/",authenticateToken,wishlistController.updateWishlistItem);
router.delete("/",authenticateToken,wishlistController.deleteWishlistItem);


module.exports=router;
