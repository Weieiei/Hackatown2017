// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueFire from 'vuefire'
import router from './router'

/* eslint-disable no-new */
Vue.use(VueMaterial)
Vue.use(VueFire)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
