const express = require("express");
const authVerification = require('../middlewares/authVerification')
const { createReview, getReviews, deleteReviews, updateReviews } = require("../controllers/reviewController");

const router = express.Router();

router.post("/create-review", authVerification, createReview);
// router.get("/get-review/:id/:isSeller", getReviews);
// router.delete("/delete-review/:id/:isSeller", deleteReviews);
router.post("/update-review/:id/:isSeller/:reviewId", authVerification, updateReviews);

module.exports = router;
