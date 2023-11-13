const ReviewModel = require('../models/reviewModel');


exports.createReview = async (req, res) => {
  try {
    const { GigId, UserId, Star, Desc } = req.body;

    if (!GigId || !UserId || !Star || !Desc) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = new ReviewModel({
      GigId,
      UserId,
      Star,
      Desc,
    });

    const savedReview = await newReview.save();
    res.status(201).send({
        success:true,
        message:"Create Review Succefull",
        savedReview,
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not create the review' });
  }
};

