import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const DataView = () => import('@/views/data_view')
const Account = () => import('@/views/account')
const Role = () => import('@/views/role')
const Sort = () => import('@/views/sort')

// 社团公告部分
const Notice = () => import('@/views/notice')
const NoticeManage = () => import('@/views/notice/notice_manage')
const NoticeFirstCheck = () => import('@/views/notice/notice_first_check')
const NoticeSecondCheck = () => import('@/views/notice/notice_second_check')

//社团管理部分
const Club = () => import('@/views/club')
const AllClubs = () => import('@/views/club/all_clubs')
const MyClub = () => import('@/views/club/my_club')
const MyMembers = () => import('@/views/club/my_club/my_members')
const ClubFirstCheck = () => import('@/views/club/club_first_check')
const ClubSecondCheck = () => import('@/views/club/club_second_check')




const Excel = () => import('@/views/excel')
const BasicInfo = () => import('@/views/basic_info')
const Recruit = () => import('@/views/recruit')

const routes = [
  {
    path: '',
    redirect: '/dataview'
  },
  {
    path: '/dataview',
    component: DataView
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/role',
    component: Role
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/notice',
    component: Notice,
    children: [
      {
        path: 'manage',
        component: NoticeManage
      },
      {
        path: 'first_check',
        component: NoticeFirstCheck
      },
      {
        path: 'second_check',
        component: NoticeSecondCheck
      }
    ]
  },
  {
    path: '/club',
    component: Club,
    children: [
      {
        path: 'all_clubs',
        component: AllClubs
      },
      {
        path: 'my_club',
        component: MyClub,
        children:[
          {
            path:'members',
            component: MyMembers
          }
        ]
      },
      {
        path: 'first_check',
        component: ClubFirstCheck
      },
      {
        path: 'second_check',
        component: ClubSecondCheck
      }
    ]
  },
  {
    path: '/excel',
    component: Excel
  },
  {
    path: '/basicInfo',
    component: BasicInfo
  },
  {
    path: '/recruit',
    component: Recruit
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //设置Y轴的起点【y属性值没有负数】
    //当然滚动行为也可以设置x轴的
    return { y: 0 }
  }
})

// router.beforeEach

export default router
