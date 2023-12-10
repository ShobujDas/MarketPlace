const msgModel = require('../models/messageModel')

exports.createMsg = async (msg) => {
  try {
    let create = await msgModel.create(msg)
  } catch (error) {
    
  }
}