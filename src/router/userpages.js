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
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

              },
              {
                path:'/setting',
                component:setting,
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