/* eslint-disable */
import vue from 'vue'
import vuex from 'vuex'
import state from './state'

vue.use(vuex)

const store = new vuex.Store({
    state
})

export default store