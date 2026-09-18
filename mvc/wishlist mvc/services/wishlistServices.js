const wishlistModel=require("../models/wishlistModels");

exports.getAllWishlistItem=async(user_id)=>{
    const getAllWishlistData=await wishlistModel.getAllWishlistItem(user_id);
    if(getAllWishlistData.length>0){
        return{
            statusCode:200,
            message:"Wishlist Items found"
        }
    }else{
        return{
            statusCode:404,
            message:"Wishlist item not found"
        }
    }
}


exports.findWishlistItem=async(user_id,product_id,quantity)=>{
    const existingWishlist=await wishlistModel.findWishlistItem(user_id,product_id)
    if(existingWishlist.length){
        const result=await wishlistModel.updateWishlistItem(user_id,product_id,quantity);
     //result is basically the information returned by model/database i use it when i need to make a desicion or send info back.
//affectedRows → tells you how many rows were changed.
     
     if(result.affectedRows===1){    
        return{
            statusCode:200,
            message:"product updated in wishlist"
        };
        }else{
            return{
                statusCode:404,
                message:"product not found in wishlist"
            };
        }

    }else{
//insertId → tells you the ID of a newly inserted row.
        const result=await wishlistModel.createWishlistItem(user_id,product_id,quantity);
        return{
            statusCode:201,
            message:"product added in wishlist",
            wishlistId: result.insertId  //here the new wishlist row got id 14 example
        }
    }
}



//delete 
exports.deleteFromWishlist=async(user_id,product_id)=>{
    
    const wishlistData=await wishlistModel.deleteFromWishlist(user_id,product_id);

  if(wishlistData.affectedRows===1){
    return{
        statusCode:200,
        message:"Wishlist item deleted successfully"
    }
  }else{
    return{
        statusCode:404,
        message:"Item not found in wishlist"
    }
  }
}

