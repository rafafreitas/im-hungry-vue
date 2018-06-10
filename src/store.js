import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    auth: false,
    userType: 0,
    token: 'token'
  },
  mutations: {
    setAuth (state, newAuth) {
      state.auth = newAuth
    },
    setUserType (state, newType) {
      state.userType = newType
    },
    setToken (state, newToken) {
      state.token = newToken
    }
  },
  getters: {
    userType: state => {
      return state.userType
    }
  }
})

export default store
