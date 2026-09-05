const jwt=require("jsonwebtoken");

const authenticateToken=(req,res,next)=>{
    console.log("cookie",req.cookies);
    const token=req.cookies.token;
    console.log("Token:",token);

if(!token){
    return res.status(401).json({
        message:"No token provided."
    });
}
//step4"verify the token
jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{

    if(err){
        return res.status(403).json({
            message: "Invalid or expired token."
        });
    }
    req.user=decoded;
    next();
});    
};

module.exports=authenticateToken;