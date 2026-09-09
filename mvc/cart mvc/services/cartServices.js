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
//delete servie part
exports.deleteFromCart=async(user_id,product_id)=>{
    const cartData=await cartModel.deleteFromCart(user_id,product_id);

    if(cartData===1){
        return{
            statusCode:200,
            message:"product removed from cart"
        };
    }else{
         return{
            statusCode:404,
            message:"product not found in cart"
         }
    }
}

//update the cart service part
exports.putToCart=async(user_id,product_id,quantity)=>{
    //here take the data form model
    const cartData=await cartModel.putToCart(user_id,product_id,quantity);

    if(cartData >=1){
        return{
            statusCode:200,
            message: "product updated in the cart"
        };
    }else{
        return{
            statusCode:404,
            message:"product not found in the cart"

        }
    }
}