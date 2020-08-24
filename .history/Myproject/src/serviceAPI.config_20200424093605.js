const LOCALURL = "http://localhost:3000/"
const URL = {
  
  registerUser: LOCALURL + 'user/register', //用户注册接口
  login:LOCALURL+'user/login',   //用户注册接口
  useressentialinfo:LOCALURL+'user/essentialinfo',  //用户修改基础信息
  passwordinfo:LOCALURL+"user/passwordinfo",   //用户密码修改
  contactinfo:LOCALURL+'user/contactinfo',   //用户电话邮箱修改
  getuserinfo:LOCALURL+"user/getuserinfo",   //得到用户信息
  getcoursesallInfo:LOCALURL+'courses/getCourseallInfo', //得到课程的全部信息
  getcourseInfo:LOCALURL+'courses/getCourseInfo',    //得到课程详情信息
  useridinsert:LOCALURL+'courses/useridinsert',  //j将用户ID插入课程表中
  getmycourses:LOCALURL+'courses/getmycourses',  //得到我的课程
  deletemycourses:LOCALURL+"courses/deletemycourses",  //删除我的课程
  getexamallInfo:LOCALURL+'question/getquestionallInfo' ,//得到考试的全部信息
  getresult:LOCALURL+'question/getresult', //得到成绩
  getTestinfo:LOCALURL+'Test/getTestinfo',    //得到知识检测的信息
  getTestresult:LOCALURL+'Test/getTestresult'   //得到知识测试的答案

}

module.exports = URL