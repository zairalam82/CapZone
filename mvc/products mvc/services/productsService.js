const productsModel=require("../models/productsModel");

exports.getAllProducts=async(page)=>{
    const limit=5
    const offset=(page-1)*limit;

    const productsData=await productsModel.getAllProducts(limit,offset);
    return{
        statusCode:200,
        message:"Products received successfully",
        products:productsData
    }
}

exports.postProducts=async(product_name, price, stock, image, description,category_id)=>{
    
    const productsData=await productsModel.postProducts(product_name, price, stock, image, description,category_id);
    return{
        statusCode:201,
        message:"product created successfully",
        products:productsData
    }
}

exports.updateToProducts=async(product_name, price, stock, image, description,category_id,product_id)=>{

    const productsData=await productsModel.updateToProducts(product_name, price, stock, image, description,category_id,product_id)
    if(productsData.affectedRows===1){
        return{
        statusCode:200,
        message:"Product updated"
        }
    }else{
        return{
            statusCode:404,
            message:"product not found"
        }
    }
}

exports.deleteProduct=async(user_id,product_id)=>{
    const productsData=await productsModel.deleteProduct(user_id,product_id);
    if(productsData.affectedRows===1){
      return{
        statusCode:200,
        message:"Product deleted successfully"
      }
    }else{
        return{
            statusCode:404,
            message:"Product not found"
        }
    }
}