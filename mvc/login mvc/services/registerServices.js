const bcrypt=require("bcrypt");

const registerModel=require("../models/registerModel");

exports.register=(userData,callback)=>{
    const {user_name ,email,password,role}=userData;

    bcrypt.hash(password,10,(err,hashedPassword)=>{
      if(err){
        console.log(err);
        return callback(err,null);
    }

    registerModel.createUser(
        user_name,
        email,
        hashedPassword,
        role,
        
//ye nicchay code callback ka hy jisme Model service ko wapis bataye ga k user database me insert hogaya ya error aaya
//when the model work is finished the below function will work

        (err,results)=>{
        if(err){
            return callback(err,null);
        }else{
            callback(null,results);
        }

        }
    );
})
}