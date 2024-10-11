const ContenucoursController = require('../controllers/contenucours')

const router = require('express').Router()

router.post('/add', ContenucoursController.addContenuCours)
router.get('/:id', ContenucoursController.getAllCoursByIdCours)

module.exports = router