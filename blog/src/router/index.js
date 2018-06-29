import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Post from '../components/post/Post'

Vue.use(VueRouter)

export default new VueRouter({
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
    }
  ]
})
/* eslint-disable */