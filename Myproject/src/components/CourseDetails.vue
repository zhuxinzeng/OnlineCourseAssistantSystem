<template>
  <div class="CD-container">
    <div class="img">
      <img :src="coursesinfo.COURSE_IMAGE" alt="课程" style=" width: 350px;height: 310px;" />
    </div>
    <div class="Info">
      <div class="name">
        <b>{{coursesinfo.COURSE_NAME}}</b>
      </div>
      <div class="teacher">
        <i>授课教师：</i>
        <b>{{coursesinfo.TEACHER_NAME}}</b>
        <i>所属学院：</i>
        <b>{{coursesinfo.TEACHER_COLLEGE}}</b>
        <i>上课地点：</i>
        <b>{{ coursesinfo.COURSE_ROOM}}</b>
      </div>
      <div class="course">
        <i>课程属性：</i>
        <b>{{coursesinfo.COURSE_ATTRIBUTE}}</b>
        <i>课程学分：</i>
        <b>{{coursesinfo.COURSE_CREDIT}}</b>
      </div>
      <div class="time">
        <i>开始时间：</i>
        <b>{{coursesinfo.COURSE_START}}</b>
        <i>结束时间：</i>
        <b>{{coursesinfo.COURSE_END}}</b>
        <i>考试时间：</i>
        <b>{{coursesinfo.COURSE_TESTTIME}}</b>
      </div>
      <div class="btn">
        <a-button size="large" @click="useridinsert()">加入课程</a-button>
        <a-button size="large" @click="deletemycourses()">取消课程</a-button>
        <a-button size="large" @click="goback" class="back-btn">返回上级</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../serviceAPI.config";

export default {
  data() {
    return {
      coursesinfo: {},
      userid:'',
      coursename:'',
  
    };
  },
  created() {
    this._id = this.$route.query._id
      ? this.$route.query._id
      : this.$route.params._id;
    console.log("这是课程id" + this._id);
    this.userid = sessionStorage.getItem('userid')
    this.getInfo();
  },

  methods: {
    //得到全部课程信息
    getInfo() {
      axios({
        url: url.getcourseInfo,
        method: "post",
        data: {
          _id: this._id
        }
      })
        .then(response => {
          if (response.status == 200 && response.data.message) {
            this.coursesinfo = response.data.message;
            this.coursename = this.coursesinfo.COURSE_NAME;
          } else {
            this.$message.error("服务器错误，数据获取失败！ ");
          }
          console.log("数据库传回课程" + this._id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    goback() {
      this.$router.go(-1);
    },
    //把用户id插入到课程表中，使用用户ID查询所选的课程信息
    useridinsert(){
        axios({
            url:url.useridinsert,
            method:'post',
            data:{
                userid: this.userid,
                coursename: this.coursename
            }
        })
        .then(response=>{
            console.log(response)
             if (response.status == 200) {
           this.$message.success('加入课程成功')
            
          } else {
            this.$message.error("服务器错误，数据获取失败！ ");
          }
        })
        .catch(error => {
          console.log(error);
        })

    },
    //删除我的课程
    deletemycourses(){
      axios({
            url:url.deletemycourses,
            method:'post',
            data:{
                userid: this.userid,
                coursename: this.coursename
            }
        })
        .then(response=>{
            console.log(response)
             if (response.status == 200) {
           this.$message.success('删除课程成功')
            
          } else {
            this.$message.error("服务器错误，数据获取失败！ ");
          }
        })
        .catch(error => {
          console.log(error);
        })

    }
 
  }
};
</script>
<style>
@import url("../assets/user-style/CourseDetails.css");
</style>