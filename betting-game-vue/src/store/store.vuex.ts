import { ThemeStore } from './theme.store'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(ThemeStore)
  }
})
const vxm = {
  theme: createProxy(store, ThemeStore)
}
