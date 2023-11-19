const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    
    GigId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gig' 
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Star: {
        type: Number,
        min: 1,
        max: 5
    },
    Sesc: {
        type: String
    }

},{timestamps:true,versionKey:false})

const ReviewModel=mongoose.model("reviews",reviewSchema)
module.exports=ReviewModel;