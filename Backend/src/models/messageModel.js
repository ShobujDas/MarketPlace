const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
  ConversationId: {
    type: String,
    required: true
  },
  UserId: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }

},{timestamps:true,versionKey:false})

const MessageModel=mongoose.model("orders",messageSchema)
module.exports=MessageModel;