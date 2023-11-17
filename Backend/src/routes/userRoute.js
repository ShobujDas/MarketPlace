const express = require('express')
const { login, register, deleteUser, getUser, userLogout } = require('../controllers/authController')
const authVerification = require('../middlewares/authVerification')
const router = express.Router()


// user routes
router.get('/login', login)
router.post('/register', register)
router.post('/delete/:id', authVerification, deleteUser)
router.get('/user/:id', authVerification, getUser)
router.post('/logout', authVerification, userLogout)


module.exports = router