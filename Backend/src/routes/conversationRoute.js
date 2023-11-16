const express = require('express');
const router = express.Router();
const { conversation, conversationCreate, conversationUpdate, singleConversation } = require('../controllers/conversationController');
const authVerification = require('../middlewares/authVerification');

// conversation routes
router.post("/create-conv", authVerification, conversationCreate)

module.exports = router