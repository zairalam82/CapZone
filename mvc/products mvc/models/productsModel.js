const db=require("../../../config/dbPromise");

exports.getAllProducts=async(limit,offset)=>{
    const sql=`select product_id,product_name,price,stock,image,description
    from products
    limit ? offset ?`
    
    const [results]=await db.execute(sql,[limit,offset]);
    return results;
}

exports.postProducts=async(product_name, price, stock, image, description,category_id )=>{
    const sql=`Insert into products
    (product_name, price, stock, image, description,category_id )
    values(?,?,?,?,?,?)
    `

    const[results]=await db.execute(sql,[product_name, price, stock, image, description, category_id]);
    return results;
}

exports.updateToProducts=async(product_name, price, stock, image, description,category_id,product_id)=>{
    const sql =`update products set product_name=?, price=?,stock=?, image=?, description=?,category_id=?
    where product_id=?`
   
    const[results]=await db.execute(sql,[product_name, price, stock, image, description,category_id,product_id]);
    return results;
}

exports.deleteProduct=async(user_id,product_id)=>{
     const sql=`delete from products
     where product_id=?`
     const[results]=await db.execute(sql,[product_id]);
     return results;
}
