const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    gigId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Gig",
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    buyerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    payment_intent:{
        type:String,
        required:true
    }

},{timestamps:true,versionKey:false}
);
const OrderModel=mongoose.model("orders",orderSchema)
module.exports=OrderModel;