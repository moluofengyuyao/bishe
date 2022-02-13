import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {userCenter} from "../utils/api";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: () => import(/* webpackChunkName: "about" */ '../views/Weather.vue')
  },
  {
    path: '/UserCenter',
    name: 'UserCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserCenter.vue'),
    //路由原数据
    meta:{
      needLogin:true
    }
  },
  {
    path: '/ShowView',
    name: 'ShowView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowView.vue')
  },{
    path: '/EMap',
    name: 'EMap',
    //路径规划
    component: () => import(/* webpackChunkName: "about" */ '../views/EMap.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    // 需要登陆的话，看是否已经有登录状态
    //否则发请求判断
    userCenter().then(res=>{
      if(res.data.code==0){
        //用户是登录状态
        next()
      }else{
        //弹出请登录确认框，确定next,否则不做改变
        next('/');
        alert('请登录')
      }

    })
  }else{
    next()
  }
})


const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
