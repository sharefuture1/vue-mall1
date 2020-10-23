import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[] //用户数组
  },
  mutations: {
    addUser(state,obj){ //obj是一个用户对象，包含username和password两个属性
      state.user.push(obj);
    }
  },
  actions: {

  }
})
