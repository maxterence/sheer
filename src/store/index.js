import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card_delshow:false,
    userinfo:'',
    mnguserinfo:'',

  },
  getters:{
    userstate(state){
      if(state.userinfo == null){
        return "点击登录";
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
    },
    icenterdelete(state){
      state.card_delshow = !state.card_delshow;
    }
  },
  actions: {
  },
  modules: {
  }
})
