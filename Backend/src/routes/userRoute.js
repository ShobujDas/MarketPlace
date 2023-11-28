const express = require('express')
const { user_login, user_register, deleteUser, getUser, logout, seller_login, seller_register, deleteSeller, getSeller, updateUser, updateSeller } = require('../controllers/authController')

const authVerification = require('../middlewares/authVerification')
const router = express.Router()


// user routes
router.get('/user-login', user_login)
router.post('/user-register', user_register)
router.post('/user-delete/:id', authVerification, deleteUser)
router.post('/user-update/:id', authVerification, updateUser)
router.get('/user/:id', authVerification, getUser)

// seller routes
router.get('/seller-login', seller_login)
router.post('/seller-register', seller_register)
router.post('/seller-delete/:id', authVerification, deleteSeller)
router.post('/seller-update/:id', authVerification, updateSeller)
router.get('/seller/:id', getSeller)

router.post('/logout', authVerification, logout)
module.exports = router