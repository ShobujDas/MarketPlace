const express = require('express');
const router = express.Router()
const { conversation, conversationCreate, conversationUpdate, singleConversation } = require('../controllers/conversationController')

// conversation routes
router.post("/create-conv", conversationCreate)