const {
  tutorEnrollment,
  listTutorEnrollments,
  coursesTutoring,
} = require('../controllers/tutorController')

const router = require('express').Router()

router.post('/enrollment', tutorEnrollment)
router.get('/enrollment', listTutorEnrollments)
router.get('/course-portal/courses-tutoring', coursesTutoring)

module.exports = router
