const mongoose = require('mongoose')
const { Schema } = mongoose

const TutorEnrollmentSchema = new Schema({
    grades: {
      type: String,
      required: true,
    },
    subjects: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.String, ref: 'Teacher' 
    }
  })

  module.exports = mongoose.model('Enrollment', TutorEnrollmentSchema)
