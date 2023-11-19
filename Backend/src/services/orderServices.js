const orderModel=require("../models/orderModel");
const gigModel=require('../models/gigModel')
const createError=require("../util/createError")


const paymentIntentS = async (req, res, next) => {
    try {
        const buyerId = req.headers.id;
        const gig = await gigModel.findById(req.params.gigId);

        if (!gig) {
            return res.status(404).send("Gig not found");
        }
        const newOrder = new orderModel({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: buyerId,
            sellerId: gig.sellerId,
            price: gig.price,
            payment_intent: "temporary",
        });
        await newOrder.save();

        res.status(200).send("Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: true, message: "Unsuccessfully", detail: err.message });
    }
};
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