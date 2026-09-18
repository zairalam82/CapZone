const wishlistService=require("../services/wishlistServices");

exports.getAllWishlistItem=async(req,res)=>{

    try{
    const user_id=req.user.user_id;

    const result=await wishlistService.getAllWishlistItem(user_id);
    res.status(result.statusCode).json({message:result.message})
}catch(err){
    console.log(err);
    res.status(500).json({message:"Internal server error"});
}
}


exports.findWishlistItem=async(req,res)=>{

    try{
    const user_id=req.user.user_id;
    const product_id=req.body.product_id;
    const quantity=req.body.quantity;

    const result=await wishlistService.findWishlistItem(user_id,product_id,quantity);
    res.status(result.statusCode).json({message:result.message})
}catch(err){
    console.log(err);
    res.status(500).json({message:"Internal server error"});
}

}
/* The below create and update in the controller are unnecessary because the find one is also taking a desion in the services
//create wishlist
exports.createWishlistItem=async(req,res)=>{
    try{
    const user_id=req.user.user_id;
    const product_id=req.body.product_id;
    const quantity=req.body.quantity;

    const result=await wishlistService.createWishlistItem(user_id,product_id,quantity);
    res.status(result.statusCode).json({message:result.message});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}

//update wishlist item
exports.updateWishlistItem=async(req,res)=>{
    try{
        const user_id=req.user.user_id;
        const product_id=req.body.product_id;
        const quantity=req.body.quantity;
        const result=await wishlistService.updateWishlistItem(user_id,product_id,quantity);
        res.status(result.statusCode).json({message:result.message})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}

int hsi way the controller is working
Controller
    ↓
Service: findWishlistItem()
    ↓
Model:
 ├── findWishlistItem()
 ├── updateWishlistItem()
 └── createWishlistItem()

*/

exports.deleteFromWishlist=async(req,res)=>{
    try{
        const user_id=req.user.user_id;
        const product_id=req.body.product_id;

        const result=await wishlistService.deleteFromWishlist(user_id,product_id);
        res.status(result.statusCode).json({message:result.message})
    }catch(err){
       console.log(err);
       res.status(500).json({message:"Internal server error"})
    }
}