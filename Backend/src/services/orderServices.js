const orderModel=require("../models/orderModel");
const gigModel=require('../models/gigModel')
const createError=require("../util/createError")


const paymentIntentS=async (req,res,next)=>{
    try{
        const gig= await gigModel.findById(req.params.gigId)
        console.log("req.userId:", req.buyerId);
        console.log("gig.userId:", gig.sellerId);
        const newOrder=new orderModel({
            gigId:gig._id,
            img:gig.cover,
            title:gig.title,
            buyerId:req.buyerId,
            sellerId:gig.sellerId,
            price:gig.price,
            payment_intent:"temporary",
        });
        await newOrder.save();
         res.status(200).send("successfully");
    }catch (err){
        res.status(200).send("Unsuccessfully");
    }
}
const getorderService=async (req)=>{
    try{
        const userId=req.userId;
        const isSeller=req.isSeller;
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
    getorderService,paymentIntentS
}