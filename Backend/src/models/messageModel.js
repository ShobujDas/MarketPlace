const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
  senderId: {
    type: String,
    required: true
  },
  receiverId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }

},{timestamps:true,versionKey:false})

const MessageModel=mongoose.model("messeges",messageSchema)
module.exports=MessageModel;