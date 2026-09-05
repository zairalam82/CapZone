const loginService=require("../services/loginServices");

exports.login=(req,res)=>{
    loginService.login(req.body,(err,result)=>{ //login.service ko ye bhej deya ab agay us ka kam

        if(err){
            return res.status(500).json({
                message:"Something went wrong"
            })
        }
        if(!result.success){
            return res.status(401).json({message:result.message})
  
        }

        res.cookie("token",result.token,{
            httpOnly:true,
            sameSite:"lax",
            maxAge:30*60*1000
        });
        return res.status(200).json({
            message:"Login successful",
            token:result.token,
            user:result.user
        });
    });
};




