import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/views/FrontPage'
import GameArea from '@/views/GameArea'
import About from '@/views/About'
import Highscores from '@/views/Highscores'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: FrontPage
    },
    {
      path: '/play',
      name: 'gamearea',
      component: GameArea
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/highscores',
      name: 'highscores',
      component: Highscores
    }
  ]
})
