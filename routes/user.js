const userController = require('../controllers/user')

const router = require('express').Router()

router.post('/add', userController.addUsers)
router.post('/login', userController.verifyUser)
router.get('/show', userController.getAll)
router.put('/:id', userController.modifierInformation)

module.exports = router