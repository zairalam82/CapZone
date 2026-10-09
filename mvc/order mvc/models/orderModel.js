
const db=require("../../../config/dbPromise");

exports.createOrder=async(user_id,connection)=>{
    const sql=`insert into orders (user_id) values(?)`;
    const[result]=await connection.execute(sql,[user_id]);

    return result;
}

exports.createOrderItem=async(order_id,product_id,quantity,connection)=>{

    const sql=`insert into order_items
    (order_id,product_id,quantity)
    values(?,?,?)`;

    const [result]=await connection.execute(sql,[order_id,product_id,quantity]);
    return result;
}

//delete the item automatically form cart when its ordered

exports.deleteCartItems=async(user_id,connection)=>{
    const sql=`delete from cart where user_id=?`;

    const [result]=await connection.execute(sql,[user_id]);
    return result;
}

