const express = require('express');

// controllers
const authController = require('../controllers/authController')
const categoryController = require('../controllers/categoryController');
const gigController = require('../controllers/gigController');
const msgController = require('../controllers/conversationController');
const reviewController = require("../controllers/reviewController");
const orderController = require("../controllers/orderController")

// middleware and router
const authVerification = require('../middlewares/authVerification')
const router = express.Router();


// category routes
router.post("/category", categoryController.categoryCreate)
router.get("/get-category", categoryController.allCategory)
router.get("/get-category/:id", categoryController.categoryByID)
router.post("/delete-category/:id", authVerification, categoryController.categoryDelete)
router.get("/update-category/:id", authVerification, categoryController.categoryUpdate)


// user routes
router.post('/user-login', authController.user_login)
router.post('/user-register', authController.user_register)
router.post('/user-delete/:id', authVerification, authController.deleteUser)
router.post('/user-update/:id', authVerification, authController.updateUser)
router.get('/user/:id', authController.getUser)

// seller routes
router.get('/seller-login', authController.seller_login)
router.post('/seller-register', authController.seller_register)
router.post('/seller-delete/:id', authVerification, authController.deleteSeller)
router.post('/seller-update/:id', authVerification, authController.updateSeller)
router.get('/seller/:id', authController.getSeller)

router.post('/logout', authVerification, authController.logout)


// gig routes
router.post("/create-gig", authVerification, gigController.gigCreate)
router.get("/get-gig/:page/:limit", gigController.AllGig)
router.get("/get-gig/:id", gigController.gigById)
router.post("/delete-gig/:id", authVerification, gigController.gigDelete)
router.post("/update-gig/:id", authVerification, gigController.gigUpdate)
router.get("/get-gig-category/:category/:page/:limit", gigController.gigByCategory)


// conversation routes
router.post("/create-conv", authVerification, msgController.conversationCreate)


// review routes
router.post("/create-review", authVerification, reviewController.createReview);
// router.get("/get-review/:id/:isSeller", getReviews);
// router.delete("/delete-review/:id/:isSeller", deleteReviews);
router.post("/update-review/:id/:isSeller/:reviewId", authVerification, reviewController.updateReviews);


// order routes
router.post("/create-order/:gigId", authVerification, orderController.paymentIntCont)
//router.post("/get-order",authVerification,paymentIntCont)

module.exports = router