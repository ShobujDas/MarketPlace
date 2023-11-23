const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    
    GigId: {
        type: mongoose.Schema.Types.ObjectId
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId
    },
    Star: {
        type: Number,
        min: 1,
        max: 5
    },
    desc: {
        type: String
    }

},{timestamps:true,versionKey:false})

const ReviewModel=mongoose.model("reviews",reviewSchema)
module.exports=ReviewModel;