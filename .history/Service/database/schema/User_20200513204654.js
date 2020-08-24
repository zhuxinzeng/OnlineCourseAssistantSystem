const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema


const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
//创建我们的用户Schema
const userSchema = new Schema({
    userName: {
        unique: true,
        type: String
    },
    password: String,
    tel:String,
    sex: String,
    major: String,
    email: String,
    studentid: String,
    identity: String,
    courseid:Array,
    avatar:String,
    createAt: {
        type: Date,
        default: Date.now()
    }, 
    lastLoginAt: {
        type: Date,
        default: Date.now()
    },

}, {
    collection: 'user'
})

//代码保存之前加盐加密
userSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash;
            next()
        })
    })
})
userSchema.methods = {
    //密码比对的方法
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}
//发布模型
mongoose.model('User', userSchema)