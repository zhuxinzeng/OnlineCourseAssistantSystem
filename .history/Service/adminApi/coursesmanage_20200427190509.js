const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose')


router.post('/getcoursesinfo', async (ctx) => {
   
    let page = ctx.request.body.pageindex;
    console.log(page)

    const Courses = mongoose.model('Courses');
    await Courses.find().skip((page-1)*8).limit(8).exec().then(result => {
        ctx.body = {
            code: 200,
            message: result

        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})

router.post('/changecoursesinfo',async(ctx)=>{
    let data = ctx.request.body.coursesinfo;
    console.log(data.COURSE_NAME);
    let _id = data._id;
    const Courses =mongoose.model('Courses');
    await Courses.updateOne({_id:_id},{$set:{"COURSE_NAME":data.COURSE_NAME,"COURSE_CREDIT":data.COURSE_CREDIT,"COURSE_ROOM":data.COURSE_ROOM,"COURSE_NUMBER":data.COURSE_NUMBER,"COURSE_ATTRIBUTE":data.COURSE_ATTRIBUTE,"COURSE_START":data.COURSE_START,"COURSE_END":data.COURSE_END,"COURSE_TESTTIME":data.COURSE_TESTTIME}}).then(result=>{
        ctx.body={
            code:200,
            message:"修改成功！"
        }
    })

})
module.exports=router