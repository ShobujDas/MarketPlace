const express = require("express");
const verifyToken = require('../middlewares/jwt');

const { createReview, getReviews, deleteReviews, updateReviews } = require("../controllers/reviewController");

const router = express.Router();

router.post("/createreview" ,verifyToken, createReview);
router.get("/getreview/:gitId", getReviews);
router.delete("/deletereview/:id", deleteReviews);
router.put("/updatereview/:id", updateReviews);

module.exports = router;
