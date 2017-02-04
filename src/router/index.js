import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import SubmitPage from 'components/SubmitPage'
import ReplyPage from 'components/ReplyPage'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Rello
    },
    {
      path: '/reply',
      name: 'ReplyPage',
      component: ReplyPage
    },
    {
      path: '/reply',
      name: 'SubmitPage',
      component: SubmitPage
    }
  ]
})
