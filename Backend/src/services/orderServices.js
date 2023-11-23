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
        return { status: 0, code: 200, data: "Successfully Payment" }
    } catch (err) {
        console.error(err);
        return {status: 0, code: 200, data: "Unsuccessfully payment"}
    }
};
const getorderService=async (req)=>{
    try{
        const userId=req.userId;
        const isSeller=req.isSeller;
        return await orderModel.find({
            $and: [
                {$or: [{sellerID: userId}, {buyerID: userId}]}, {isCompleted: true}
            ]
        }).populate(isSeller ? 'buyerID' : 'sellerID', 'username email image country');
    }catch (err){
        throw {error:true,message:err.message}
    }
}
module.exports={
    getorderService,paymentIntentS
}