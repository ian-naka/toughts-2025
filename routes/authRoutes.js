const express = require ('express')
const router = express.Router()
// controller

const authController = require('../controllers/authController')
router.get('/login', authController.login)
router.get('/register', authController.register)
router.post('/register', authController.registerPost)

module.exports = router