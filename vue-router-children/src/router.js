import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}
const Users = () => import(/* webpackChunkName: "about" */ './views/Users.vue')
const UsersEdit = () => import(/* webpackChunkName: "about" */ './views/UsersEdit.vue')
const UsersDetail = () => import(/* webpackChunkName: "about" */ './views/UsersDetail.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter')
        next()
      },
      children: [
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail,
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit,
        },
      ]
    }
  ]
})
