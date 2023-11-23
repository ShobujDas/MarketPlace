const express = require('express');
const { categoryCreate, allCategory, categoryByID, categoryDelete, categoryUpdate } = require('../controllers/categoryController');
const authVerification = require('../middlewares/authVerification')
const router = express.Router();

// category routes
router.post("/category", categoryCreate)
router.get("/get-category", allCategory)
router.get("/get-category/:id", categoryByID)
router.post("/delete-category/:id", authVerification, categoryDelete)
router.get("/update-category/:id", authVerification, categoryUpdate)

module.exports = router