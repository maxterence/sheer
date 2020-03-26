import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    icenterdeleteshow:false,
    userinfo:'',
    mnguserinfo:'',

  },
  getters:{
    userstate(state){
      if(state.userinfo == null){
        return "请登录";
      }else{
        return state.userinfo;
      }
    }
  },
  mutations: {
    mnglogin(state,v){
      state.mnguserinfo = v;
    },
    userlogin(state,v){
      state.userinfo = v;
    }
  },
  actions: {
  },
  modules: {
  }
})
