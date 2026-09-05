const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const loginModel=require("../models/loginModel");

exports.login=(data,callback)=>{
    const {email,password,role}=data;
    loginModel.findUser(email,role,(err,result)=>{
        if(err){
            return callback(err,null);
        }

        if(!result ||result.length===0){
            return callback(null,{success:false,message:"User not found"});
        }

    const user=result[0];
    bcrypt.compare(password,user.password,(err,isMatch)=>{
        if(err){
            return callback(err,null);
        }
    if(!isMatch){
        return callback(null,{success:false,message:"Invalid password"})

    }

const token=jwt.sign(
    {user_id:user.id,role:user.role},
    process.env.JWT_SECRET,
    {expiresIn: "1h"}
);

return callback(null,{
    success:true,
    token,
    user:{id:user.id,email:user.email,role:user.role}
});
    });
    });
};
