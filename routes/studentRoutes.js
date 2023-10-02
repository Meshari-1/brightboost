const { studentEnrollment, studentEnrollmentSave } = require('../controllers/studentController')

  
  const router = require('express').Router()
  
  // /student/enrollment
  router.post('/enrollment', studentEnrollment)
  router.post('/enrollment/save', studentEnrollmentSave)



  
  module.exports = router
  