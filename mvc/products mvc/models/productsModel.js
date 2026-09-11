const db=require("../../../config/dbPromise");

exports.getAllProducts=async(limit,offset)=>{
    const sql=`select product_id,product_name,price,stock,image,description
    from products
    limit ? offset ?`
    
    const [results]=await db.execute(sql,[limit,offset]);
    return results;
}