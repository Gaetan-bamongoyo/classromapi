const remettreController = require('../controllers/remettre')

const router = require('express').Router()

router.post('/add', remettreController.upload, remettreController.addRemettre)
router.post('/show', remettreController.getRemettreByDevoirsId)

module.exports = router