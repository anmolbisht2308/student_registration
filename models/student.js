const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    section:{
        type: String,
        required: true
    },
    fees_paid: {
        type: Boolean,
        required: true,
        default: false
    },
    rollnumber: {
        type: Number,
        required: true
        
    },
    attendance_percent: {
        type: string,
        required: true
        
    },



})

module.exports = mongoose.model('Student',studentSchema)