const suivrecoursController = require('../controllers/suivrecours')

const router = require('express').Router()

router.post('/add', suivrecoursController.addSuivreCours)
router.get('/:id', suivrecoursController.getAllCoursByIdCours)

module.exports = router