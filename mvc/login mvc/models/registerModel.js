const db=require("../../../config/db");

exports.createUser=(
    user_name,
    email,
    hashedPassword,
    role,
    callback
)=>{
    const sql='Insert into users(user_name,email,password,role) values(?,?,?,?)';
    db.query(sql,[user_name,email,hashedPassword,role],(err,results)=>{
        if(err){
            return callback(err,null);
        }else{
            callback(null,results)
        }
    });
};