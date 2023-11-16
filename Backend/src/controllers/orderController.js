const orderServices=require("../services/orderServices")

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