const { reviewCreate, reviewUpdate, getReviewByGig } = require("../services/reviewServices");


//Create Review
exports.createReview = async (req, res) => {
  let result = await reviewCreate(req)
  res.status(200).json(result)
};

//get single review
exports.getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ GigId: req.params.gigId });
    res.status(200).send({
      success: true,
      message: "Single review Fetched",
      reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in getting Single Review",
    });
  }
};

//Delete Review
exports.deleteReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Delete review Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleteing Single Review",
    });
  }
};

//update Review
exports.updateReviews = async (req, res) => {
  let result = await reviewUpdate(req)
  res.status(200).json(result)
};


exports.reviewBygig = async (req, res) => {
  let result = await getReviewByGig(req)
  res.status(200).json(result)
}