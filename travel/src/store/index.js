import Vue from 'vue'
import Vuex from 'vuex'
import {userCenter} from "../utils/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {},
    dialogVisible:false,
  },
  getters:{},
  mutations: {
    //同步,在页面使用commit调用
    changLogin(state, payload) {
      state.isLogin = payload.isLogin
      state.userInfo = payload.userInfo
    },
    changVisible(state, payload) {
      //弹框
      state.dialogVisible = payload.dialogVisible
    },

  },
  actions: {
    userCenter(context){
      userCenter().then(res=>{
        if (res.data.code == 0) {
          context.commit("changLogin", {isLogin: true,dialogVisible:false, userInfo: res.data.userInfo})

          // console.log(res)
        } else {
          context.commit("changLogin", {isLogin: false, userInfo: {}})
        }
      })
    }
  },
  modules: {
  }
})
