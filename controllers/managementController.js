const asynHandler = require('express-async-handler')
const {TeacherAuthModel} = require('../models/TeacherAuthModel')

// Tutor Enrollment
// Route: /management/get-tutor-requests
const manageTutorRequest = asynHandler(async (req, res) => {
  const enrollments = await TeacherAuthModel.find({
    teacherstatus: false,
  })
    .populate({ path: 'enrollment' })
    .select('-address')
    .select('-school')
    .select('-password')
    .select('-teacherstatus')

  res.status(200).json(enrollments)
})

// Accept Enrollment Request
// Route: /management/accept-request
const acceptTutorRequest = asynHandler(async (req, res) => {
  const { email } = req.body

  const statusChanged = await TeacherAuthModel.findOneAndUpdate(
    { email },
    {
      teacherstatus: true,
    }
  )

  if (!statusChanged) {
    res.status(404).json({ message: 'no tutor found with that email' })
  }

  if (statusChanged) {
    res.status(200).json({ successMsg: 'Tutor status has been updated' })
  }
})

// Decline Enrollment Request
// Route: /management/decline-request
const declineTutorRequest = asynHandler(async (req, res) => {
  const { email } = req.body

  const deletedTutor = await TeacherAuthModel.findOneAndDelete({ email })

  if (!deletedTutor) {
    res.status(404).json({ message: 'Tutor not found with that email!' })
  }

  res.status(200).json({ successMsg: 'Tutor has been deleted!' })
})

// Management Courses
// Route: /management/courses
const courseTutors = asynHandler(async (req, res) => {
  const tutors = await TeacherAuthModel.find({ teacherstatus: true })
    .select('-school')
    .select('-password')
    .select('-teacherstatus')

  res.json(tutors)
})

module.exports = {
  manageTutorRequest,
  acceptTutorRequest,
  declineTutorRequest,
  courseTutors,
}
