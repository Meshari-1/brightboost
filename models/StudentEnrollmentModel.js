const mongoose = require('mongoose')
const { Schema } = mongoose


const StudentEnrollmentSchema = new Schema({
  grades: {
    type: String,
    required: true,
  },
  subjects: {
    type: String,
    required: true,
  },
  
  date: {
    type: Date,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  tutor: {
    type: String,
    required: true
  },

  method:{
    type: String,
    required: true 
  },

  time: {
    type: String,
    required: true,
  },
 
})

module.exports = mongoose.model('StudentEnrollment', StudentEnrollmentSchema)
