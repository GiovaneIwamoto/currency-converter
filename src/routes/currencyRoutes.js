const express = require('express')
const { GetConversion } = require('../controllers/currencyControllers')

const router = express.Router()

// Get conversion route
router.get('/convert', GetConversion)

module.exports = router
