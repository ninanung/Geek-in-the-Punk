import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuePrism from 'vue-prism'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuePrism,
  render: h => h(App),
}).$mount('#app')
