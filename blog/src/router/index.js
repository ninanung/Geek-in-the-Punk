import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Post from '../components/post/Post'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:index',
      name: 'Post',
      component: Post
    }
  ]
})
/* eslint-disable */