const express = require ('express')
const router = express.Router()
// controller

const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/add', checkAuth, ToughtController.createTought)
router.get('/', ToughtController.showToughts)


module.exports = router