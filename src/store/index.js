import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo :{
      userName: '未登录',
      text: '好好学习，天天向上'
    }
  },
  mutations: {
    changeLogin(state, status) {
      state.userInfo.userName = status;
    }
  },
  actions: {
    loginAction({commit}, user) {
      commit('changeLogin', user);
    }
  },
  modules: {
  }
})
