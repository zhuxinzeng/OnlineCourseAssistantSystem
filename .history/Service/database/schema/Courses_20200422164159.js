const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coursesSchema = new Schema({
    ID: {
        unique: true,
        type: String
    },
    TEACHER_NAME: String,
    TEACHER_COLLEGE: String,
    TEACHER_AVATOR: String,
    COURSE_ID: String,
    COURSE_NAME: String,
    COURSE_CREDIT: Number,
    COURSE_ROOM: String,
    COURSE_IMAGE: String,
    COURSE_NUMBER: Number,
    COURSE_ATTRIBUTE: String,
    COURSE_START: String,
    COURSE_END: String,
    COURSE_TESTTIME: String,
    COURSE_COUNT: Number,
    PICTURE_PATH: String,
    userid:Array
},{
    collection:'Courses'
}
)
mongoose.model('Courses',coursesSchema)