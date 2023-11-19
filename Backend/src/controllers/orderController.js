const orderServices=require("../services/orderServices")
const createError=require("../util/createError")
const paymentIntCont=async (req,res)=>{
    try{
        const newOrders=await orderServices.paymentIntentS(req,res)
    }catch (error){
        res.status(200).json({
            status:"Fail",
            data:error
        })
    }
}

const getOrders=async (req,res)=>{
    try{
        const order=await orderServices.getorderService(req);
        return res.status(200).json({
            status:"success",
            data:order
        })
    }catch (err){
        res.status(400).json({status:"Fail",data:err})
    }
}
module.exports={
    getOrders,paymentIntCont
}