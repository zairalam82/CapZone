const wishlistModel=require("../models/wishlistModels");

exports.findWishlistItem=async(user_id,product_id,quantity)=>{
    const existingWishlist=await wishlistModel.findWishlistItem(user_id,product_id)
    if(existingWishlist){
        const result=await wishlistModel.updateWishlistItem(user_id,product_id,quantity);
        return{
            statusCode:200,
            message:"product updated in wishlist"
        };
    }else{

        const result=await wishlistModel.createWishlistItem(user_id,product_id,quantity);
        return{
            statusCode:201,
            message:"product added in wishlist"
        }
    }
}



//delete 
exports.deleteFromWishlist=async(user_id,product_id)=>{
    const wishlistData=await wishlistModel.deleteFromWishlist(user_id,product_id);
  return wishlistData;
}