import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  auth: false,
  userType: 0,
  token: 'token'
}

const mutations = {
  setAuth (state, newAuth) {
    state.auth = newAuth
  },
  setUserType (state, newType) {
    state.userType = newType
  },
  setToken (state, newToken) {
    state.token = newToken
  }
}

export default new Vuex.Store({
  state,
  mutations
})
