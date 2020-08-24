const Router =require('koa-router');
let router = new Router();
const mongoose = require('mongoose')


router.post('/getcourseinfo', async(ctx)=>{
    let page = ctx.request.body;
    console.log(page)

    const Courses = mongoose.model('Courses');
    await Courses.find().skip(10).limit(10).exec().then(result=>{
      
                ctx.body={
                    code:200,
                    message:result
          
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
})