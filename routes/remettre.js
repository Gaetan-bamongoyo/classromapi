const remettreController = require('../controllers/remettre')

const router = require('express').Router()

router.post('/add', remettreController.upload, remettreController.addRemettre)

module.exports = router