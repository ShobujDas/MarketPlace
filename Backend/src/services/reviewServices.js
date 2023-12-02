const ReviewModel = require("../models/reviewModel");
const gigModel = require('../models/gigModel')

const { ObjectId } = require('mongoose').Types;



//Create Review
exports.reviewCreate = async (req) => {
  try {
    let userId = req.headers.id
    if (!req.headers.isSeller && userId == req.body.UserId){
      let create = await ReviewModel.create(req.body)

      // calculate total stars
      let matchStage = { $match: { GigId: new ObjectId(""+req.body.GigId) } }
      let groupStage = { $group: { _id: "$GigId", averageStars: { $avg: "$Star" } } }
      let calculateTotalStars = await ReviewModel.aggregate([matchStage, groupStage])
      
      // update gig stars
      let totalReview = await gigModel.updateOne({ _id: new ObjectId("" + req.body.GigId) }, {
        $inc: { totalStars: 1 },
        $set: { starNumber: calculateTotalStars[0].averageStars }
      })
      
      return { status: 1, code: 200, data: "review posted" }
    }

    return { status: 0, code: 200, data: "cannot post review" }
    
  } catch (error) {
    console.log(error)
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

//update Review
exports.reviewUpdate = async (req) => {
  try {
    let userId = req.headers.id
    let isSeller = String(req.headers.isSeller)
    
    if (userId == req.params.id && isSeller === req.params.isSeller){
      
      let query = { _id: req.params.reviewId, GigId: req.body.GigId, UserId: userId }
      let update = await ReviewModel.updateOne(query, req.body)

      return { status: 1, code: 200, data: "review updated" }
    }

    return { status: 0, code: 200, data: "could not update review" }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}


// delete review
exports.reviewDelete = async (req) => {
  try {
    let userId = req.headers.id
    let isSeller = req.headers.isSeller
    let gigId = req.body.GigId

    if (userId == req.params.id && isSeller == req.params.isSeller) {
      let query = { GigId: gigId, UserId: userId }
      let deleted = await ReviewModel.deleteOne(query)

      return { status: 1, code: 200, data: "review deleted" }
    }

    return { status: 0, code: 200, data: "could not delete review" }

    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get review by gigs
exports.getReviewByGig = async (req) => {
  try {
    let gigId = req.params.gigId

    let matchStage = { $match: { GigId: new ObjectId(gigId) }}
    let lookup1 = {
      $lookup: {
        from: 'users',
        localField: 'UserId',
        foreignField: '_id',
        as: 'user'
      }
    }
    let unwindStage = {$unwind: '$user'}
    let projection = {
      $project: {
        _id: 0,
        Star: 1,
        desc: 1,
        'user.img': 1,
        'user.firstName': 1,
        'user.lastName': 1
      }
    }

    let reviews = await ReviewModel.aggregate([matchStage, lookup1, unwindStage, projection])

    return { status: 1, code: 200, data: reviews }


  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}