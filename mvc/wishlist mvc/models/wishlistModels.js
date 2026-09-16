const db=require("../../../config/dbPromise");
//finding and checking the wishlist if its exist give us if not create --for that we use the below one function
exports.addToWishlist=async(user_id,product_id)=>{
    const sql=`select * from wishlist where 
    user_id=? AND product_id=?`

    const [result]=await db.execute(sql,[user_id,product_id]);
    return result;
}
 //create wishlist 
exports.addToWishlist=async(user_id,product_id,quantity)=>{
    const sql=`insert into wishlist where
    (user_id,product_id,quantity) values(?,?,?)`
    
    const[result]=await db.execute(sql,[user_id,product_id,quantity]);
    return result;
}



//get
exports.getFromWishlist=async(user_id)=>{
    const sql=`select * from wihslist where (user_id) values(?)`
    const[result]=await db.execute(sql,[user_id])
    return result;
}


//update
exports.updateToWishlist=async(user_id,product_id,quantity)=>{
    const sql=`update into wishlist (user_id,product_id,quantity)values (?,?,?)`
    const[result]=await db.execute(sql,[user_id,product_id,quantity])
    return result;
}

//delete 
exports.deleteFromWishlist=async(user_id,product_id)=>{
    const sql=`delete from wishlist where (user_id,product_id) values (?,?)`
    const[result]=await db.execute(sql,[user_id,product_id])
    return result;
}
