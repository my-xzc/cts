import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Hello'
import about from '@/components/about'
import lz from '@/components/lz'
import bsbdj from '@/components/bsbdj'

Vue.use(Router)

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      name: 'cts',
      meta:'藏头诗',
      component: main
    },
    {
      path: '/bsbdj',
      name: 'bsbdj',
      meta:'百思不得姐',
      component: bsbdj
    },
    {
      path: '/lz',
      name: 'lz',
      meta:'英文励志语录',
      component: lz
    },
    {
      path: '/about',
      name: 'about',
      meta:'关于我',
      component: about
    }
  ]
})
