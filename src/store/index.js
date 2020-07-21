import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo :{
      userName: '未登录',
      text: '好好学习，天天向上',
      id: ''
    }
  },
  mutations: {
    changeLogin(state, status) {
      console.log("state: "+ state);
      console.log("status "+ status);
      state.userInfo.userName = status.name;
      state.userInfo.id = status.id;
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
