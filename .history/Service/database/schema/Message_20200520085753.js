const mongoose = require('mongoose');
const Schema = mongoose.Schema


// Schema支持的键值类型有String，Number，Date，Buffer，Boolean，Array，Objectld，Mixed。Schema不仅定义document的模板，而且可以定义document的实例方法

//创建UseerSchema
const MessageSchema = new Schema({
  
  name: String, 
  msg: String
})

//发布模型
mongoose.model('Message', MessageSchema)