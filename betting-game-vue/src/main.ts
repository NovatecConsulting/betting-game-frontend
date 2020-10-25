import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.vuex'
import i18n from './i18n'
import './filters/DateTime'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  store,
  router
}).$mount('#app')
