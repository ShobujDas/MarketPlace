const mongoose = require("mongoose");
const ConversationSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  readBySeller: {
    type: Boolean,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
},{timestamps: true,versionKey: false });

const conversationModel = mongoose.model('conversations', ConversationSchema);
module.exports = conversationModel;