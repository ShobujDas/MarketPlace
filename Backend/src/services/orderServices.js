const orderModel=require("../models/orderModel");

const getorderService=async (userId,isSeller)=>{
    try{
        const orders=await orderModel.find({
            $and:[
                {$or:[{sellerID:userId},{buyerID:userId}]},{isCompleted:true}
            ]
        }).populate(isSeller?'buyerID':'sellerID','username email image country')

        return orders;
    }catch (err){
        throw {error:true,message:err.message}
    }
}
module.exports={
    getorderService,
}