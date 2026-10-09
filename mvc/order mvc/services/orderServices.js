const db=require("../../../config/dbPromise");
const orderModel=require("../models/orderModel");
const cartModel=require("../../cart mvc/models/cartModel"); //here we have to import our cart Model because we want the items from cart

exports.addToOrder=async(user_id)=>{
    
    const connection=await db.getConnection();
    try{
        const cartData=await cartModel.getAllCartItems(user_id);

        if(cartData.length===0){
            return{
                statusCode:404,
                message:"Cart is empty"
            };
        }
//start Transaction
await connection.beginTransaction();
//2.create order
const orderData=await orderModel.createOrder(user_id,connection);
const order_id=orderData.insertId;

//3.create order items from cart
for(const item of cartData){
    await orderModel.createOrderItem(
        order_id,
        item.product_id,
        item.quantity,
        connection
    );
}

//4.Remove cart items
await cartModel,deleteCartItem(user_id,connection);

//5. Everything succeeded
await connection.commit();
return{
    statusCode:201,
    message:"Order placed successfully"
};
    }catch(err){
        //6.something failed
        await connection.rollback();
        throw err;
    } finally{
        connection.release();
    }    
    
}