const ReviewModel = require("../models/reviewModel");


//Create Review
exports.reviewCreate = async (req) => {
  try {
    let create = await ReviewModel.create(req.body)
    return { status: 1, code: 200, data: "review posted" }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

//update Review
exports.reviewUpdate = async (req) => {
  try {
    let userId = req.headers.id
    let 

    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}