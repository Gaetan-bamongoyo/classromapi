const devoirsController = require('../controllers/devoirs')

const router = require('express').Router()

router.post('/add', devoirsController.addDevoir)
router.get('/:id', devoirsController.getDevoirByCourdId)

module.exports = router