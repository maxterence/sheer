import Home from '../views/Home.vue'
import setting from '../views/setting.vue'
import main from '../views/Main.vue'
import icenter from'../views/icenter.vue'
// import store from 'vuex'


let routes=[
    {
        path:'/',
        name:'main',
        component:main, 
        meta:{
          title:"Sheer"
        },
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
              },
              {
                path:'/home',
                redirect:{name:'home'},
                alias:'/main'
              },
              {
                path:'/search/:searchkeywords',
                component:()=>import('../views/search.vue'),
              },
              {
                path:'/searchinput',
                component:()=>import('../views/SearchInput.vue'),
              },
              {
                path: '/about',
                name: 'about',
               
                component: () => import( '../views/About.vue'),
                meta:{
                  title:"关于"
                },
              },
              {
                path:'/login',
                name:'login',
                component: () => import('../views/Login.vue'),
                meta:{
                  title:"登录"
                },
              },
              {
                path:'/register',
                component: () => import('../views/Register.vue'),
                meta:{
                  title:"注册"
                },
              },
              {
                path:'/i',
                component: icenter,
                beforeEnter: (to, from, next) => {
                  var a =localStorage.getItem("userinfoname"); 
                  if(a){
                 
                    next();
                    
                  }else{
                    next({path:'/login'});
                  }
                },
                beforeRouteLeave (to, from, next) {
                 
                  next();
                },
                meta:{
                  title:"个人中心"
                },
              },
              {
                 path:'mylike',
                 component: () => import('@/components/userpage/mylike.vue'),
                 beforeEnter: (to, from, next) => {
                   var a =localStorage.getItem("userinfoname"); 
                   if(a){
                     next();
                    }else{
                      // this.$alert("登录后才能查看哦", "请登录", {
                      //   confirmButtonText: "确定"
                      // });
                      alert("请登录")
                       next({path:'/login'});
                   }
                 },
                 meta:{
                  title:"我的喜欢",
                },
              },

              {
                path:'/setting',
                component:setting,
                children:[
                  {
                    path:'',    //默认
                    component: () => import('../components/userpage/setpersonal.vue')
                  },
                  {
                    path:'setpassword',
                    component: () => import('../components/userpage/setpassword.vue')  
                  }
                ],
                meta:{
                  title:"设置"
                },
              },
        ]
    }
]


export default routes;