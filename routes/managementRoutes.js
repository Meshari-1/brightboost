const {
  manageTutorRequest,
  acceptTutorRequest,
  declineTutorRequest,
  courseTutors,
} = require('../controllers/managementController')

const router = require('express').Router()

router.get('/get-tutor-requests', manageTutorRequest)
router.post('/accept-request', acceptTutorRequest)
router.post('/decline-request', declineTutorRequest)
router.get('/courses', courseTutors)

module.exports = router
