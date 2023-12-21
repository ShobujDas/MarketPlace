const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
  email: { type: String },
  otp: { type: Number },
  status: { type: Number, default: 0 }

}, { timestamps: true, versionKey: false })

const MessageModel = mongoose.model("otps", otpSchema)
module.exports = MessageModel;