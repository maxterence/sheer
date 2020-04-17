import Home from '../views/Home.vue'
import setting from '../views/setting.vue'
import main from '../views/Main.vue'



let routes=[
    {
        path:'/',
        name:'main',
        component:main,      
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
                path: '/about',
                name: 'about',
               
                component: () => import( '../views/About.vue')
              },
              {
                path:'/login',
                name:'login',
                component: () => import('../views/Login.vue')
              },
              {
                path:'/register',
                component: () => import('../views/Register.vue')
              },
              {
                path:'/i',
                component:() => import('../views/icenter.vue'),
                beforeEnter: (to, from, next) => {
                  var a =localStorage.getItem("userinfoname"); 
                  if(a){
                      next();
                  }else{
                      next({path:'/login'});
                  }
              },
              },
              {
                path:'/setting',
                component:setting,
                beforeEnter: (to, from, next) => {
                  var a =localStorage.getItem("userinfoname"); 
                  if(a){
                      next();
                  }else{
                      next({path:'/login'});
                  }
                },
                children:[
                  {
                    path:'',    //默认
                    component: () => import('../components/setpersonal.vue')
                  },
                  {
                    path:'setpassword',
                    component: () => import('../components/setpassword.vue')
                    
                  }
                ]
              },
        ]
    }
]


export default routes;