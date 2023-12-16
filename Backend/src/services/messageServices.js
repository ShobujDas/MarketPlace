const msgModel = require('../models/messageModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

// create a message
exports.createMsg = async (msg) => {
  try {
    let create = await msgModel.create(msg)
  } catch (error) {
    console.log(error)
  }
}

// get people
exports.getPeople = async (req) => {
  try {
    let id = req.headers.id
    let seller = req.headers.isSeller

    let matchStage = {
      $match: {
        $or: [{ receiverId: new ObjectId(id) }, { senderId: new ObjectId(id)}]
      }
    }
    let lookupStage = {
      $lookup: {
        from: 'users',
        localField: 'senderId',
        foreignField: '_id',
        as: 'senderInfo'
      }
    }
    let unwindStage = { $unwind: '$senderInfo' }
    let groupStage = {
      $group: {
        _id: '$senderInfo._id',
        img: { $first: '$senderInfo.img' },
        firstName: { $first: '$senderInfo.firstName' },
        lastName: { $first: '$senderInfo.lastName' }
      }
    }
    let projectStage = {
      $project: {
        _id: 1,
        img: 1,
        firstName: 1,
        lastName: 1
      }
    }

    let result

    if(seller){
      result = await msgModel.aggregate([matchStage, lookupStage, unwindStage, groupStage, projectStage])

    }
    else{
      groupStage = {
        $group: {
          _id: '$senderInfo._id',
          img: { $first: '$senderInfo.img' },
          serviceName: { $first: '$senderInfo.serviceName' },
        }
      }
      lookupStage = {
        $lookup: {
          from: 'service_providers',
          localField: 'senderId',
          foreignField: '_id',
          as: 'senderInfo'
        }
      }

      projectStage = {
        $project: {
          _id: 1,
          img: 1,
          serviceName: 1,
        }
      }

      result = await msgModel.aggregate([matchStage, lookupStage, unwindStage, groupStage, projectStage])      
    }

    return {status: 1, code: 200, data: result}
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get messages
exports.getMsgs = async (req) => {
  try {
    let senderId = req.headers.id
    let receiverId = req.params.id

    let chats = await msgModel.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).select("senderId receiverId text")

    return { status: 1, code: 200, data: chats }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}