import { ThemeStore } from './modules/theme.store'
import { UserStore } from './modules/user.store'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(ThemeStore),
    ...extractVuexModule(UserStore)
  }
})

export const vxm = {
  theme: createProxy(store, ThemeStore),
  user: createProxy(store, UserStore)
}
