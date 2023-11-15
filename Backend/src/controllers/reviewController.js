const ReviewModel = require("../models/reviewModel");

//Create Review
exports.createReview = async (req, res) => {
  try {
    const { GigId, UserId, Star, Desc } = req.body;

    if (!GigId || !UserId || !Star || !Desc) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new ReviewModel({
      GigId,
      UserId,
      Star,
      Desc,
    });

    const savedReview = await newReview.save();
    res.status(201).send({
      success: true,
      message: "Create Review Succefull",
      savedReview,
    });
  } catch (error) {
    res.status(500).json({ error: "Could not create the review" });
  }
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
  try {
    const { GigId, UserId, Star, Desc } = req.body;

    if (!GigId || !UserId || !Star || !Desc) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const reviews = await ReviewModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    ).save();

    res.status(200).send({
      success: true,
      message: "Update review Successfully",
      reviews
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleteing Single Review",
    });
  }
};
