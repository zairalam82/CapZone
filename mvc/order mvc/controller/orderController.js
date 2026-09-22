const orderService=require("../services/orderServices");

exports.addToOrder=async(req,res)=>{
    try{    const user_id=req.user.user_id;
    //const order_id=req.body; there is no need of order_id because its generate after the user order that will store in database

    const result=await orderService.addToOrder(user_id);
    res.status(result.statusCode).json({message:result.message});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}