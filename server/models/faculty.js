const mongoose=require('mongoose')

const facultySchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: true,
    },
    facultySalary: {
        type: Number,
        required: true,
    },
});

const faculty =  mongoose.model("faculty",facultySchema)
module.exports = faculty
