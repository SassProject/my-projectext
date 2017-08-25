import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/Recommend',
      component: Recommend
    },
    {
      path: '/Singer',
      component: Singer
    },
    {
      path: '/Rank',
      component: Rank
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
