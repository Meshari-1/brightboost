const asyncHandler = require('express-async-handler')
const TutorEnrollmentModel = require('../models/TutorEnrollmentModel')
const StudentEnrollmentModel = require('../models/StudentEnrollmentModel')

// Studet Enrollment
// Route: /student/enrollment
// Method: POST
const studentEnrollment = asyncHandler(async (req, res) => {
    const {grades, subjects} = req.body

    if (!grades){
        res.status(400)
        throw new Error('Please include your grade')
    }

    const data = await TutorEnrollmentModel.find({grades: grades, subjects: subjects })
    .populate({ path: 'teacherId' })
       
     res.json(data)
   
})

// Save Studet Enrollment
// Route: /student/enrollment/save
// Method: POST
const studentEnrollmentSave = asyncHandler(async (req, res) => {
    const {grades, subjects,date, tutor, method, time } = req.body

   const weekDay = generateDay(date)

    if (!grades || !subjects || !date || !tutor || !time || !method){
        res.status(400)
        throw new Error('Please include all details')
    }

    
    const docsve = new StudentEnrollmentModel({
        grades: grades,
        subjects: subjects,
        date: date,
        days: weekDay,
        tutor: tutor,
        method: method, 
        time: time, 
        method: method
    })
    await docsve.save()


    if (!docsve){
        res.status(400)
        throw new Error('Something went wrong!')
    }


    res.json({successMsg: 'Student enrollment confirmed!'})
})

function generateDay (date){
    let weekdayNumber = new Date().getDay(date)
    let weekDay = ''
    if (weekdayNumber === 1){
        weekDay =  'Monday'
    }else if (weekdayNumber === 2){
        weekDay = 'Tuesday'
    }
    else if (weekdayNumber === 3){
        weekDay = 'Wednesday'
    }
    else if (weekdayNumber === 4){
        weekDay = 'Thursday'
    }
    else if (weekdayNumber === 5){
        weekDay = 'Friday'
    }
    else if (weekdayNumber === 6){
        weekDay = 'Saturday'
    }else{
        weekDay = 'Sunday'
    }

    return weekDay
}


module.exports = {
    studentEnrollment, studentEnrollmentSave
}

