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

exports.postProducts=async(req,res)=>{
    try{
    const { product_name, price, stock, image, description,category_id } = req.body;
    const result=await productsService.postProducts(
        product_name, price, stock, image,description, category_id
    )
    res.status(result.statusCode).json({message:result.message});

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        });
    }

}

exports.updateToProducts=async(req,res)=>{
    try{
    const product_id=req.params.product_id;
    const{product_name, price, stock, image, description,category_id}=req.body;
    const result=await productsService.updateToProducts(product_name, price, stock, image, description,category_id,product_id);
    res.status(result.statusCode).json({message:result.message});
    }catch(err){
        console.log(err);
        res.status(500).json({
         message:"Internal server error"
        })
    }

}

exports.deleteProduct=async(req,res)=>{
    try{
     const user_id=req.params.user_id;   
    const {product_id}=req.body;

    const result=await productsService.deleteProduct(user_id,product_id);
    res.status(result.statusCode).json({message:result.message});
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"});
    }
}