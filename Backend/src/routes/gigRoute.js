const express = require('express');
const authVerification = require('../middlewares/authVerification');
const { gigCreate, gigById, AllGig, gigDelete, gigUpdate } = require('../controllers/gigController');
const router = express.Router();

// gig routes
router.post("/create-gig", authVerification, gigCreate)
router.get("/get-gig", AllGig)
router.get("/get-gig/:id", gigById)
router.post("/delete-gig/:id", authVerification, gigDelete)
router.post("/update-gig/:id", authVerification, gigUpdate)

module.exports = router