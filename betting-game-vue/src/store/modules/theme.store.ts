import { createModule, mutation, action, extractVuexModule } from 'vuex-class-component'
import { THEME_CHANGE_THEME } from '../actions'
const VuexModule = createModule({
  strict: false
})

export class ThemeStore extends VuexModule {
  theme = 'light'
  private lightTheme = 'light'
  private darkTheme = 'dark';

  @mutation [THEME_CHANGE_THEME](value: string) {
    this.theme = value
    const app = document.querySelector('html')
    if (app) {
      app.className = value
    }
  }
  get currentTheme() {
    return this.theme
  }
}
