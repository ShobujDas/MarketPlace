const orderServices=require("../services/orderServices")
const createError=require("../util/createError")
const paymentIntCont=async (req,res)=>{

        const newOrders=await orderServices.paymentIntentS(req,res)
        res.status(200).json(newOrders)

}

const getOrderController=async (req,res)=>{
        const order=await orderServices.getorderService(req);
        res.status(200).json(order)
}
module.exports={
    getOrderController,paymentIntCont
}