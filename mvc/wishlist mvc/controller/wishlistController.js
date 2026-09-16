const wishlistService=require("../services/wishlistServices");

exports.findWishlistItem=async(req,res)=>{

    try{
    const user_id=req.user.user_id;
    const product_id=req.body.product_id;

    const result=await wishlistService.findWishlistItem(user_id,product_id);
    res.status(result.statusCode).json({message:result.message})
}catch(err){
    console.log(err);
    res.status(500).json({message:"Internal server error"});
}

}

//get wishlist
exports.createWishlistItem=async(req,res)=>{
    try{
    const user_id=req.params.user_id;
    const product_id=req.body.product_id;
    const quantity=req.body.quantity;

    const result=await wishlistService.createWishlistItem(user_id,product_id,quantity);
    res.status(result.statusCode).json({message:result.statusCode});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}

exports.updateWishlistItem=async(req,res)=>{
    try{
        const user_id=req.params.user_id;
        const product_id=req.body;
        const quantity=req.body;
        const result=await wishlistService.updateWishlistItem(user_id,product_id,quantity);
        res.status(result.statusCode).json({message:result.statusCode})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}


exports.deleteFromWishlist=async(req,res)=>{
    try{
        const user_id=req.body;
        const product_id=req.body;

        const result=await wishlistService.deleteFromWishlist(user_id,product_id);
        res.status(200).json({message:"Product deleted from wishlist successfully"})
    }catch(err){
       console.log(err);
       res.status(500).json({message:"Internal server error"})
    }
}