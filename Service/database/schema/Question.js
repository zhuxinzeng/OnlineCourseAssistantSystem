const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

//创建QuestionSchema

const QuestionSchema = new Schema({
    subjectname:String,
    examtime:String,
    Topictypes:String,
    examscore:String,
    ques_sequence: String,
    ques_title: String,
    options_list:[
        {
            Ques_id: String,
            options_id: String,
            options_title: String
        }
    ],
    userchoose:String,
  
    correctanswer:String,
   


})


mongoose.model('Question',QuestionSchema)