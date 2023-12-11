
const MessageModel = require('../models/messageModel');
const { createMsg, getPeople, getMsgs } = require('../services/messageServices');

exports.msgCreate = async (msg) => {
  let result = await createMsg(msg)
}

// get chat people
exports.chatGet = async (req, res) => {
  let result = await getPeople(req)
  res.status(200).json(result)
}

// get messgaes by sender
exports.msgGet = async (req, res) => {
  let result = await getMsgs(req)
  res.status(200).json(result)
}

exports.createMessage = async (req, res) => {
  try {
    const { ConversationId, UserId, Description } = req.body;

    if (!ConversationId || !UserId || !Description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new MessageModel({
      ConversationId,
      UserId,
      Description,
    });

    const savedMessage = await newMessage.save();
    res.status(201).send({
        success:true,
        message:"Craete Massege Succefull",
        savedMessage,
    })
  } catch (error) {
    res.status(500).json({ error: 'Could not create the message' });
  }
};




exports.getMessages = async (req, res) => {
  try {
    const allMessages = await MessageModel.find();
    res.status(200).send({
        success:true,
        message:"Get ALL Massege Succefull",
        allMessages,
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not receive messages' });
  }
};


