const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get('/',async (ctx)=>{
    ctx.body='这是question首页'

})

module.exports= router