const registerService=require("../services/registerServices");

exports.register=(req,res)=>{

    registerService.register(req.body,(err,result)=>{
        
        if(err){
            return res.status(500).json({
                message:"Something went wrong"
            });
        }

    res.status(201).json({
        message:"User registered successfully",
        userId:result.insertId
    });

    });
};




