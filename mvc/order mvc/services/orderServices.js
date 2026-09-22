const orderModel=require("../models/orderModel");

exports.addToOrder=async(user_id)=>{
    const orderData=await orderModel.addToOrder(user_id); //1
    

    
}