const gig = require("../models/gigModel");

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
    let result = await gig.findOne({ _id: req.params.id })
    return { status: 1, code: 200, data: result }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};

// all gig
exports.getAllGigs = async () => {
  try {
    let result = await gig.find()
    return { status: 1, code: 200, data: result }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
};