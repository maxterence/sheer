import Vue from 'vue'
import VueRouter from 'vue-router'
import managesys from '../router/managesys.js'
import userpages from '../router/userpages.js'
// import store from '../store';


Vue.use(VueRouter)

const baseroute = [];

const routes = baseroute.concat(managesys,userpages);

const router = new VueRouter({
  routes,
  mode:'history',
  
})


// router.beforeEach((from, to, next) => {
//   if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
//       if (store.state.token || to.path === '/managelogin') { // vuex.state判断token是否存在
//           next() // 已登录
//       } else {
//           next({
//               path: '/managelogin',
//               query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//       }
//   } else {
//      next()
//   }
// })


export default router
