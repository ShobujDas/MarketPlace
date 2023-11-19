const express = require('express')
const authVerification = require('../middlewares/authVerification')
const {paymentIntCont}=require("../controllers/orderController")
const router = express.Router()

router.post("/create-order/:gigId",authVerification,paymentIntCont)
//router.post("/get-order",authVerification,paymentIntCont)
module.exports = router