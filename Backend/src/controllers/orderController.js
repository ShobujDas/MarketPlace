const orderServices=require("../services/orderServices")
const createError=require("../util/createError")
const gigModel=require('../models/gigModel')
const paymentIntent=async (req,res)=>{
    try{
        const id=req.params.id;
        const gigId=await gigModel.findOne(id)

    }catch (err){

    }
}









const getOrders=async (req,res)=>{
    try{
        const userId=req.userId;
        const isSeller=req.isSeller;
        const order=await orderServices.getorderService(userId,isSeller);
        return res.status(200).json({
            status:"success",
            data:order
        })
    }catch (err){
        res.status(400).json({status:"Fail",data:err})
    }
}
module.exports={
    getOrders
}