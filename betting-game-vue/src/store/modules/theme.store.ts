import { createModule, mutation, action, extractVuexModule } from 'vuex-class-component'
import { THEME_CHANGE_THEME } from '../actions'
const VuexModule = createModule({
  namespaced: 'theme',
  strict: false
})

export class ThemeStore extends VuexModule {
  theme = 'light';

  @mutation [THEME_CHANGE_THEME](value: string) {
    this.theme = value
    const app = document.querySelector('html')
    if (app) {
      app.className = value
    }
  }
}
