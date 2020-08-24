const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

//创建QuestionSchema

const QuestionSchema = new Schema({
    subjectname:String,
    examtime:String,
    examscore:String,
    ques_id: ObjectId,
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
QuestionSchema.methods={
    //题目正确答案对比
    compareanswer:(answer,correctanswer)=>{
        let isMatch;
        let noMatch;
       if(answer == correctanswer){
           return isMatch
       }else{
           return noMatch
       }

    }
}

mongoose.model('Question',QuestionSchema)