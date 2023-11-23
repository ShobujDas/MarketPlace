const createError = require("../util/createError.js");
const Conversation = require("../models/conversationModel");

// create conversation
const createConversation = async (req) => {
  try {
    const newConversation = new Conversation({
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller,
      readByBuyer: !req.isSeller,
    });

    const savedConversation = await newConversation.save();

    return {
      status: 1,
      code: 200,
      data: savedConversation
    }

  } catch (err) {
    return {
      status: 0,
      code: 200,
      data: "something went wrong"
    }
  }
};

// update conversaiton
const updateConversation = async (req) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // readBySeller: true,
          // readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    return {
      status: 1,
      code: 200,
      data: updatedConversation
    }
  } catch (err) {
    return {
      status: 0,
      code: 200,
      data: "something went wrong"
    }
  }
};


// get single conversation
const getSingleConversation = async (req) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) {
      return {
        status: 0,
        code: 200,
        data: "No conversation found"
      }
    };

    return {
      status: 1,
      code: 200,
      data: conversation
    }

  } catch (err) {
    return {
      status: 0,
      code: 200,
      data: "something went wrong"
    }
  }
};


// get conversation
const getConversations = async (req) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });

    return {
      status: 1,
      code: 200,
      data: conversations
    }
  } catch (err) {
    return {
      status: 0,
      code: 200,
      data: "something went wrong"
    }
  }
};


module.exports = {
  getConversations, getSingleConversation, updateConversation, createConversation
}