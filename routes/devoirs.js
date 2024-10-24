const devoirsController = require('../controllers/devoirs')

const router = require('express').Router()

router.post('/add', devoirsController.addDevoir)

module.exports = router