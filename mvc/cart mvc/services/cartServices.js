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

//get services part

exports.getFromCart=async(user_id)=>{
   
    const cartData=await cartModel.getFromCart(user_id);
    return cartData; //ab ye controller ko return kr dy ga agar ye nhe likhen gay to service ko to model sy data mil gaya lakin controller ko nhe mila
    
}
