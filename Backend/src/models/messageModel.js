const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  }

},{timestamps:true,versionKey:false})

const MessageModel=mongoose.model("messeges",messageSchema)
module.exports=MessageModel;