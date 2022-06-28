import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const DataView = () => import('@/views/data_view')
const Excel = () => import('@/views/excel')
const BasicInfo = () => import('@/views/basic_info')
const Recruit = () => import('@/views/recruit')

const routes = [
  {
    path: '',
    redirect:'/dataview'
  },
  {
    path: '/dataview',
    component: DataView
  },
  {
    path:'/excel',
    component: Excel
  },
  {
    path: '/basicInfo',
    component: BasicInfo
  },
  {
    path:'/recruit',
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
