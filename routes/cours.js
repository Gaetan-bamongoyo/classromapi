const coursController = require('../controllers/cours')

const router = require('express').Router()

router.post('/add', coursController.addCours)
router.get('/:id', coursController.getAllCoursByIdUser)

module.exports = router