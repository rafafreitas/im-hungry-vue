// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
// todo
// cssVars()
Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.http.options.root = process.env.API
Vue.http.headers.common['Authorization'] = store.state.token

router.beforeEach((to, from, next) => {
  if (to.meta.auth && to.meta.auth !== store.state.auth) {
    next({path: '/login'})
  }
  if (to.meta.userType !== null && to.meta.userType !== store.state.userType) {
    next({path: 'forbidden'})
  }
  console.log('Router-Store-Auth', store.state.auth)
  console.log('Router-Store-UserType', store.state.userType)
  console.log('Router-Store-Meta', to.meta)
  console.log('Router-From', from)
  next()
})

/* eslint-disable no-new */
new Vue({
  data: {
    auth: false
  },
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
