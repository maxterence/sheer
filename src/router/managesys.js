import mnglogin from '../views/mngsys/mnglogin.vue';
import managesys from '../views/mngsys/managesys.vue';
import showdata from '../components/mngsys/showdata.vue';
import postmanage from '../components/mngsys/postmanage.vue';
import usermanage from '../components/mngsys/usermanage.vue';
import store from '../store';

let routes=[
    {
        path:'/managelogin',
        component:mnglogin,
        name:'managelogin',
        meta:{
            title:"登录"
          },
      },
    {    
        path:'/managesys',
        component:managesys,
        beforeEnter: (to, from, next) => {
            if(store.state.mnguserinfo !=''){
                next();
            }else{
                next({path:'/managelogin'});
            }
        },
        meta:{
            requireAuth: true,
            title:"管理系统"
        },
        children:[
        {
            path:'showdetail',
            component:showdata,
        },
        {
            path:'postmanage',
            component:postmanage,
        },
        {
            path:'usermanage',
            component:usermanage,
        },
        ]
}
]




export default routes;