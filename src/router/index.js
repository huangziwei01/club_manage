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
const Detail = () => import('@/views/club/all_clubs/detail')

const MyClub = () => import('@/views/club/my_club')
const MyMembers = () => import('@/views/club/my_club/my_members')
const MyActivities = () => import('@/views/club/my_club/my_activities')
const MyExit = () => import('@/views/club/my_club/my_exit')
const MyChange = () => import('@/views/club/my_club/my_change')
const MyCancel = () => import('@/views/club/my_club/my_cancel')

const ClubFirstCheck = () => import('@/views/club/club_first_check')
const ClubSecondCheck = () => import('@/views/club/club_second_check')

//社团活动部分
const Activity = () => import('@/views/activity')
const AllActivities = () => import('@/views/activity/all_activities')
const MyActivitiies = () => import('@/views/activity/my_activities')
const ActivityDetail = () => import('@/views/activity/my_activities/activity_detail')
const ActivityRecord = () => import('@/views/activity/my_activities/activity_record')
const AddRecord = () => import('@/views/activity/my_activities/add_record')
const ActivityFirstCheck = () => import('@/views/activity/activity_first_check')
const ActivitySecondCheck = () => import('@/views/activity/activity_second_check')

//活动记录
const ClubActivityRecord = () => import('@/views/club_activity_record')
const AllRecords = () => import('@/views/club_activity_record/all_records')
const RecordFirstCheck = () => import('@/views/club_activity_record/record_first_check')
const RecordSecondCheck = () => import('@/views/club_activity_record/record_second_check')

//换届
const Change = () => import('@/views/change')
const AllChanges = () => import('@/views/change/all_changes')
const ChangeFirstCheck = () => import('@/views/change/change_first_check')
const ChangeSecondCheck = () => import('@/views/change/change_second_check')

//注销
const Cancel = () => import('@/views/cancel')
const AllCancels = () => import('@/views/cancel/all_cancels')
const CancelFirstCheck = () => import('@/views/cancel/cancel_first_check')
const CancelSecondCheck = () => import('@/views/cancel/cancel_second_check')



const Excel = () => import('@/views/excel')
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
    component: Account,
    name:'Account'
  },
  {
    path: '/role',
    component: Role,
    name:'Role'
  },
  {
    path: '/sort',
    component: Sort,
    name:'Sort'
  },
  //公告
  {
    path: '/notice',
    component: Notice,
    name:'Notice',
    children: [
      {
        path: 'manage',
        component: NoticeManage,
        name:'NoticeManage'
      },
      {
        path: 'first_check',
        component: NoticeFirstCheck,
        name:'NoticeFirstCheck'
      },
      {
        path: 'second_check',
        component: NoticeSecondCheck,
        name:'NoticeSecondCheck'
      }
    ]
  },
  //社团管理
  {
    path: '/club',
    component: Club,
    children: [
      {
        path: 'all_clubs',
        component: AllClubs,
        children: [
          {
            path: 'detail/:id?',
            component: Detail
          }
        ]
      },
      {
        path: 'my_club',
        component: MyClub,
        children: [
          {
            path: 'members',
            component: MyMembers
          },
          {
            path: 'activities',
            component: MyActivities
          },
          {
            path: 'exit',
            component: MyExit
          },
          {
            path: 'change',
            component: MyChange
          },
          {
            path: 'cancel',
            component: MyCancel
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
  //社团活动
  {
    path: '/activity',
    component: Activity,
    children: [
      {
        path: 'all_activities',
        component: AllActivities
      },
      {
        path: 'my_activities',
        component: MyActivitiies,
        children: [
          {
            path: 'detail',
            component: ActivityDetail
          },
          {
            path: 'record',
            component: ActivityRecord
          },
          {
            path: 'add_record',
            component: AddRecord
          }
        ]
      },
      {
        path: 'first_check',
        component: ActivityFirstCheck
      },
      {
        path: 'second_check',
        component: ActivitySecondCheck
      }
    ]
  },
  //活动记录
  {
    path:'/club_activity_record',
    component:ClubActivityRecord,
    children:[
      {
        path:'all_records',
        component:AllRecords,
        name:'AllRecords'
      },
      {
        path:'first_check',
        component:RecordFirstCheck,
        name:'RecordFirstCheck'
      },
      {
        path:'second_check',
        component:RecordSecondCheck,
        name:'RecordSecondCheck'
      }
    ]
  },
  //社团换届
  {
    path:'/change',
    component:Change,
    name:'Change',
    children:[
      {
        path:'all_changes',
        component:AllChanges,
        name:'AllChanges'
      },
      {
        path:'first_check',
        component:ChangeFirstCheck,
        name:'ChangeFirstCheck'
      },
      {
        path:'second_check',
        component:ChangeSecondCheck
      }
    ]
  },
  //社团注销
  {
    path:'/cancel',
    component:Cancel,
    name:'Cancel',
    children:[
      {
        path:'all_cancels',
        component:AllCancels,
        name:'AllCancels'
      },
      {
        path:'first_check',
        component:CancelFirstCheck,
        name:'CancelFirstCheck'
      },
      {
        path:'second_check',
        component:CancelSecondCheck,
        name:'CancelSecondCheck'
      }
    ]
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
