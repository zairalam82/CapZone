const orderModel=require("../models/orderModel");

exports.addToOrder=async(user_id,order_id,quantity)=>{
    const orderData=await orderModel.addToOrder(user_id,order_id,quantity);
    
}