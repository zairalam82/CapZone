const db=require("../../../config/dbPromise");
exports.getAllWishlistItem=async(user_id)=>{
    const sql=`select * from wishlist where user_id=?`
    const[result]=await db.execute(sql,[user_id])
    return result;
}
//finding and checking the wishlist if its exist give us if not create --for that we use the below one function
exports.findWishlistItem=async(user_id,product_id)=>{
    const sql=`select * from wishlist where 
    user_id=? And product_id=?`

    const [result]=await db.execute(sql,[user_id,product_id]);
    return result;
}
 //create wishlist 
exports.createWishlistItem=async(user_id,product_id,quantity)=>{
    const sql=`insert into wishlist
    (user_id,product_id,quantity) values(?,?,?)`
    
    const[result]=await db.execute(sql,[user_id,product_id,quantity]);
    return result;
}

//update wishlist Item
exports.updateWishlistItem=async(user_id,product_id,quantity)=>{
    const sql=`update wishlist set quantity=? where user_id=? And product_id=? `
    
    const[result]=await db.execute(sql,[quantity,user_id,product_id]);
    return result;
}



//delete 
exports.deleteFromWishlist=async(user_id,product_id)=>{
    const sql=`delete from wishlist where user_id=? And product_id=? `
    const[result]=await db.execute(sql,[user_id,product_id])
    return result;
}
