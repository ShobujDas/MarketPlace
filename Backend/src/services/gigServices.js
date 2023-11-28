const gig = require("../models/gigModel");
const { ObjectId } = require('mongoose').Types;

// create gig
exports.createGig = async (req) => {
  try {
    let create = await gig.create(req.body)
    return { status: 1, code: 200, data: "gig has been created" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// delete gig
exports.deleteGig = async (req) => {
  try {
    let deleted = await gig.updateOne({_id: req.params.id}, {isActive: false})
    return { status: 1, code: 200, data: "gig has been deleted" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// delete gig
exports.updateGig = async (req) => {
  try {
    let deleted = await gig.updateOne({ _id: req.params.id }, req.body)
    return { status: 1, code: 200, data: "gig has been updated" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// gig by id
exports.getGigById = async (req) => {
  try {
    let result = await gig.findOne({ _id: req.params.id, isActive: true })
    return { status: 1, code: 200, data: result }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// all gig
exports.getAllGigs = async (req) => {
  try {
    let limit = parseInt(req.params.limit)
    let skip = (parseInt(req.params.page) - 1) * limit

    let matchStage = { $match: { isActive: true } }
    let sortStage = { $sort: { starNumber: -1 } }
    let skipStage = { $skip: skip }
    let limitStage = { $limit: limit }
    let lookUpSeller = {
      $lookup: {
        from: 'service_providers',
        localField: 'sellerId',
        foreignField: '_id',
        as: 'provider'
      }
    }
    let unwind = { $unwind: '$provider' }
    let projectStage = {
      $project: {
        _id: 1,
        cover: 1,
        title: 1,
        short_desc: 1,
        starNumber: 1,
        price: 1,
        category: 1,
        totalStars:1,
        'provider.serviceName': 1,
        'provider.img': 1
      }
    }
    let countStage = {
      $count: 'total'
    }

    let category = await gig.aggregate([
      {
        $facet: {
          "gigs": [matchStage, sortStage, skipStage, limitStage, lookUpSeller, unwind, projectStage],
          "totalCount": [matchStage, countStage]
        }
      }
    ])

    return { status: 1, code: 200, data: category[0] }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// gig by category
exports.getGigByCategory = async (req) => {
  try {
    let limit = parseInt(req.params.limit)
    let skip = (parseInt(req.params.page) - 1) * limit

    let matchStage = { $match: { category: new ObjectId(req.params.category) ,isActive: true}}
    let sortStage = {$sort: {starNumber: -1}}
    let skipStage = {$skip : skip}
    let limitStage = {$limit : limit}
    let lookUpSeller = {
      $lookup: {
        from: 'service_providers',
        localField: 'sellerId',
        foreignField: '_id',
        as: 'provider'
      }
    }
    let unwind = {$unwind: '$provider'}
    let projectStage = {
      $project: {
        _id: 1,
        cover: 1,
        title: 1,
        short_desc: 1,
        starNumber: 1,
        price: 1,
        category: 1,
        totalStars: 1,
        'provider.serviceName': 1,
        'provider.img': 1
      }
    }
    let countStage = {
      $count: 'total'
    }

    // let category = await gig.find({ category: req.params.category }).sort({ starNumber: -1 }).skip(skip).limit(limit)
    let category = await gig.aggregate([
      {
        $facet: {
          "gigs": [matchStage, sortStage, skipStage, limitStage, lookUpSeller, unwind, projectStage],
          "totalCount": [matchStage, countStage]
        }
      }
    ])

    // let total = await gig.find({ category: mongoose.Types.ObjectId(req.params.category) }).count("total")

    return { status: 1, code: 200, data: category[0] }
    
  } catch (error) {
    console.log(error)
    return { status: 0, code: 200, data: "something went wrong" }
  }
}