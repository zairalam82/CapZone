const cartModel=require("../models/cartModel");

exports.addToCart=async(user_id,product_id,quantity)=>{
    const existingItem=await cartModel.findCartItem(
        user_id,
        product_id
    );
if(existingItem){
    await cartModel.updateQuantity(
        user_id,
        product_id,
        quantity
    );
    return{
        statusCode:200,
        message:"Cart quantity updated"
    };
}else{
    await cartModel.createCartItem(
        user_id,
        product_id,
        quantity
    );
    return{
        statusCode:201,
        message:"product added to cart!"
    }
}


}