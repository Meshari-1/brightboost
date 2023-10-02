const asynHandler = require('express-async-handler')
const { TeacherAuthModel } = require('../models/TeacherAuthModel')
const TutorEnrollmentModel = require('../models/TutorEnrollmentModel')


// Tutor Enrollment
// Route: /tutor/enrollment
// Method: POST
const tutorEnrollment = asynHandler(async (req, res) => {
  const { grades, subjects, days, method, time, qualifications, teacherId } =
    req.body

  if ((!grades || !subjects || !days || !method || !time, !qualifications || !teacherId)) {
    res.status(500)
    throw new Error('all fields are required!')
  }

  if (!teacherId) {
    res.status(500)
    throw new Error('no teacher id attached!')
  }

  const teacher = await TeacherAuthModel.findOne({ _id: teacherId });

if (!teacher){
  res.status(404)
  throw new Error('Teacher does not exist')
}

 // Create a new Enrollment document
const enrollment = new TutorEnrollmentModel({
  grades,
  subjects,
  days,
  method,
  time,
  qualifications,
  teacherId
})

await enrollment.save()
res.json({successMsg: 'Tutor enrollment saved!'})
 
})

// Tutor Enrollment
// Route: /tutor/enrollment
// Method: GET
const listTutorEnrollments = asynHandler(async (req, res) => {
    const data = await TutorEnrollmentModel.find({})
    .populate({ path: 'teacherId' })

  res.json(data)
})

// Courses Portal - Courses Tutoring
// Route: /tutor/course-portal/courses-tutoring
// Method: GET
const coursesTutoring = asynHandler(async (req, res) => {
  const { email } = req.body

  if (!email) {
    res.status(400)
    throw new Error('No email attached')
  }

  const courses = await TeacherAuthModel.find({ email })

  if (courses.length > 0) {
    res.status(200).json(courses)
  } else {
    res.status(404)
    throw new Error('wrong email or no course enrollment')
  }
})

module.exports = {
  tutorEnrollment,
  listTutorEnrollments,
  coursesTutoring,
}
