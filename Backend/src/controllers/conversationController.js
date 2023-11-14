// import services
const { createConversation, getConversations, getSingleConversation, updateConversation } = require('../services/conversationServices')

// create conversation controller
exports.conversationCreate = async (req, res) => {
  let result = await createConversation(req)
  res.status(200).json(result)
}

// conversation update controller
exports.conversationUpdate = async (req, res) => {
  let result = await updateConversation(req)
  res.status(200).json(result)
}

// get singele conversation controller
exports.singleConversation = async (req, res) => {
  let result = await getSingleConversation(req)
  res.status(200).json(result)
}

// get conversation controller
exports.conversation = async (req, res) => {
  let result = await getConversations(req)
  res.status(200).json(result)
}