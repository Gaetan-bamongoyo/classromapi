const suivrecoursController = require('../controllers/suivrecours')

const router = require('express').Router()

router.post('/add', suivrecoursController.addSuivreCours)
router.get('/:id', suivrecoursController.getAllCoursByIdCours)
router.get('/participant/:id', suivrecoursController.getAllParticipant)

module.exports = router