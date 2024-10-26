const coursController = require('../controllers/cours')

const router = require('express').Router()

router.post('/add', coursController.addCours)
router.get('/:id', coursController.getAllCoursByIdUser)
router.get('/courses/:id', coursController.getOnlyCoursById)
router.get('/participation/:id', coursController.getAllParticipantByCoursId)

module.exports = router