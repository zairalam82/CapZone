const productsService=require("../services/productsService");

exports.getAllProducts=async(req,res)=>{
    try{
    const page=req.query.page;
    const result=await productsService.getAllProducts(page);
    res.status(result.statusCode).json({message:result.message});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }  
}
