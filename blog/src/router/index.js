/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Post from '../components/post/Post'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:year/:index',
      name: 'Post',
      component: Post
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router