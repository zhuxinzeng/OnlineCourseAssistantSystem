const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get('/', async (ctx) => {
    ctx.body = '这是examamagement首页'

})
//新增考试信息
router.post("/insertexaminfo", async (ctx) => {
    let examinfo = ctx.request.body.examinfo;
    console.log(examinfo)
    const Exam = mongoose.model("Exam")
    let newExam = Exam(examinfo)
    await newExam.save().then(result => {
        if (result) {
            ctx.body = {
                code: 200,
                message: result

            }
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })

})
//获取考试信息
router.post('/getexaminfo', async (ctx) => {
    let page = ctx.request.body.pageindex;
    console.log(page)

    const Exam = mongoose.model('Exam');
    await Exam.find().skip((page - 1) * 8).limit(8).exec().then(result => {
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
//删除考试信息
router.post('/deleteexaminfo', async (ctx) => {
    let name = ctx.request.body.examname;
    console.log(name);
    const Exam = mongoose.model('Exam');
    await Exam.deleteOne({
        examname: name
    }).then(result => {
        ctx.body = {
            code: 200,
            message: '删除考试成功！'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
//新增考试选项
router.post('/addexamoptionsinfo', async (ctx) => {
    try {
        let
    } catch {

    }
})
module.exports = router