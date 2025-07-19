const express = require ('express')
const router = express.Router()
// controller

const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/', ToughtController.showToughts)
router.get('/dashboard', checkAuth, ToughtController.dashboard)

module.exports = router