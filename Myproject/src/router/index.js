import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//用户端
//导航
import Nav from '../components/nav.vue' //上导航栏
import Index from '@/views/index.vue' //宣传主页
import Login from '../components/login.vue' //登录
import Register from '../components/register.vue' //注册
import Sidenav from '../components/sidenav.vue' //用户侧边栏


//用户端 
import Home from '../components/Home.vue'
import HomePage from "../views/user/HomePage.vue"
import CourseInfo from '../views/user/CourseInfo.vue' //课程信息
import KnowledgeDetection from '../views/user/KnowledgeDetection.vue' //知识检测
import Testing from '../components/Testing.vue' //知识检测模版
import DataDownload from '../views/user/DataDownload.vue' //资料下载
import OnlineExamintion from '../views/user/OnlineExamintion.vue'
import OnlineAnswer from '../views/user/OnlineAnswer.vue' //在线解疑
import OnlineHomework from '../views/user/OnlineHomework'
import BadgeAward from '../views/user/BadgeAward.vue' //徽章奖励
import ProfileSettings from '../views/user/ProfileSettings.vue' //个人资料设置
//个人资料修改下的组件路由
import EssentialInfo from '../components/EssentialInfo.vue' //基本信息
import PasswordInfo from '../components/PasswordInfo.vue' //修改密码
import ContactInfo from '../components/ContactInfo.vue' //联系信息



//课程详细信息组件
import CoursesdetailInfo from '../components/CoursesdetailInfo.vue' //课程详细信息组件
import CourseDetails from '../components/CourseDetails.vue'
//考试信息组件
import Examdetails from '../components/Examdetails.vue'

//---管理端
import adminLogin from '../views/management/page/Login.vue'
import adminregister from '../views/management/page/Register.vue'

//---管理端首页
import Adminhome from '../views/management/components/Home.vue' //管理端首页组件
import Adminindex from '../views/management/page/Index.vue' //管理端首页
import CourseManagement from '../views/management/page/CourseManagement' //管理端课程信息管理
import CourseAnnouncement from '../views/management/page/CourseAnnouncement' //课程公告管理
import StudentManagement from '../views/management/page/StudentManagement' //学生端信息管理
import OnlineQuestion from '../views/management/page/OnlineQuestion' //答疑解惑
import StudentResult from '../views/management/page/StudentInfo'  //学生成绩
import TaskManagement from '../views/management/page/TaskManagement' //发布作业
import CheckTask from '../views/management/page/CheckTask'     //查看作业
import ExamManagement from '../views/management/page/ExamManagement'  //添加考试信息
import ExamManagementSubject from '../views/management/page/ExamManagementSubject'    //添加考试选项   
import PersonalInfo from '../views/management/page/PersonalInfo'      //个人信息
import KnowledgeManagement from '../views/management/page/KnowledgeManagement'  //知识检测
import Dataupload from '../views/management/page/Dataupload'   //资料上传
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    //用户端路由
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav,

    }, {
      path: '/OnlineExamintion',
      name: 'OnlineExamintion',
      component: OnlineExamintion,

    }, {
      path: '/Examdetails',
      name: 'Examdetails',
      component: Examdetails,
    }, {
      path: '/Testing',
      name: 'Testing',
      component: Testing
    }
    //侧栏导航
    , {
      path: 'sidenav',
      name: 'Sidenav',
      component: Sidenav
    },
    //侧栏导航目录
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'CourseInfo',
          name: 'CourseInfo',
          component: CourseInfo,

        }, {
          path: 'CourseDetails',
          name: 'CourseDetails',
          component: CourseDetails
        },

        {
          path: 'KnowledgeDetection',
          name: 'KnowledgeDetection',
          component: KnowledgeDetection
        }, {
          path: 'DataDownload',
          name: 'DataDownload',
          component: DataDownload
        }, {
          path: 'OnlineAnswer',
          name: 'OnlineAnswer',
          component: OnlineAnswer
        },{
          path: 'OnlineHomework',
          name: 'OnlineHomework',
          component: OnlineHomework
        }, {
          path: 'BadgeAward',
          name: 'BadgeAward',
          component: BadgeAward
        }, {
          path: 'ProfileSettings',
          name: 'ProfileSettings',
          component: ProfileSettings
        },
      ]
    },
    //个人资料设置下的组件路由

    {
      path: 'EssentialInfo',
      name: 'EssentialInfo',
      component: EssentialInfo
    }, {
      path: 'PasswordInfo',
      name: 'PasswordInfo',
      component: PasswordInfo
    }, {
      path: 'ContactInfo',
      name: 'ContactInfo',
      component: ContactInfo
    },
    //课程详情模块
    {
      path: 'CoursesdetailInfo',
      name: "CoursesdetailInfo",
      component: CoursesdetailInfo,

    },
    //登录注册路由
    {
      path: '/login',
      name: Login,
      component: Login
    }, {
      path: '/register',
      name: Register,
      component: Register
    },
    //---管理端路由
    {
      path: '/adminLogin',
      name: adminLogin,
      component: adminLogin
    },
    {
      path: '/adminregister',
      name: adminregister,
      component: adminregister
    },
   
    {
      path: '/ExamManagementSubject',
      name: ExamManagementSubject,
      component: ExamManagementSubject
    },
    {
      path: '/Adminhome',
      name: Adminhome,
      component: Adminhome,
      children: [{
          path: 'Adminindex',
          name: Adminindex,
          component: Adminindex
        }, {
          path: 'CourseManagement',
          name: CourseManagement,
          component: CourseManagement
        },
        {
          path: 'StudentManagement',
          name: StudentManagement,
          component: StudentManagement
        }, {
          path: 'OnlineQuestion',
          name: OnlineQuestion,
          component: OnlineQuestion
        },{
          path: 'StudentResult',
          name: StudentResult,
          component: StudentResult
        },{
          path:'TaskManagement',
          name: TaskManagement,
          component: TaskManagement
        },{
          path:'CheckTask',
          name: CheckTask,
          component: CheckTask
        }
        ,{
          path:'ExamManagement',
          name: ExamManagement,
          component: ExamManagement
        }
        ,{
          path:'PersonalInfo',
          name: PersonalInfo,
          component: PersonalInfo
        },
        ,{
          path:'KnowledgeManagement',
          name: KnowledgeManagement,
          component: KnowledgeManagement
        },
        {
          path:'Dataupload',
          name: Dataupload,
          component: Dataupload
        },
        {
          path:'CourseAnnouncement',
          name: CourseAnnouncement,
          component: CourseAnnouncement
        }
      ]

    }

  ]
})
