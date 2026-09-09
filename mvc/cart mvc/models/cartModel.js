const Cart=require("./cartsequelizeModel");

exports.findCartItem=async(user_id,product_id)=>{
    return await Cart.findOne({
        where:{
            user_id:user_id,
            product_id:product_id
        }
    });
};

exports.updateQuantity=async(user_id,product_id,quantity)=>{
    return await Cart.increment(
        "quantity",
        {
            by:quantity,
            where:{
                user_id:user_id,
                product_id:product_id
            }
        }
    );
};

exports.createCartItem=async(user_id,product_id,quantity)=>{
    return await Cart.create({
        user_id:user_id,
        product_id:product_id,
        quantity:quantity
    });
};


//get model of cart

exports.getFromCart=async(user_id)=>{
    return await Cart.findAll({ //There can be more cart of one user thats why we use all
        where:{
            user_id:user_id
        }
    })
}

