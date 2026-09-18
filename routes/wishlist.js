const express=require('express');
const router=express.Router();
const authenticateToken=require("../middleware/auth");

const wishlistController=require("../mvc/wishlist mvc/controller/wishlistController");

router.get("/",authenticateToken,wishlistController.getAllWishlistItem)
router.post("/",authenticateToken,wishlistController.findWishlistItem);


router.delete("/",authenticateToken,wishlistController.deleteFromWishlist);


module.exports=router;
