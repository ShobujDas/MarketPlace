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
    gigID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Gig",
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    sellerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    buyerID:{
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

},{"timeStamp":true,"verSionKey":false})
const OrderModel=mongoose.model("orders",orderSchema)
module.exports=OrderModel;