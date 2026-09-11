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