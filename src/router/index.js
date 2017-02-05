import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Google from 'components/Google'
import SubmitPage from 'components/SubmitPage'
import ReplyPage from 'components/ReplyPage'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'SubmitPage',
      component: SubmitPage
    },
    {
      path: '/submit',
      name: 'SubmitPage',
      component: SubmitPage
    },
    {
      path: '/reply',
      name: 'ReplyPage',
      component: ReplyPage
    },
    {
      path: '/stm',
      name: 'Google',
      component: Google
    }
  ]
})
