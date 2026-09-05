const cartService=require("../services/cartServices");

exports.addToCart=async(req,res)=>{
    try{
        const user_id=req.user.user_id;
        const{product_id,quantity}=req.body;
        const result=await cartService.addToCart(
            user_id,
            product_id,
            quantity
        );
        res.status(result.statusCode).json({
            message:result.message
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Something went worng"
        })
    }
}