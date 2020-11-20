import { createModule, mutation, action, extractVuexModule } from 'vuex-class-component'

const VuexModule = createModule({
  strict: false
})

export class ThemeStore extends VuexModule {
  private theme = 'light'
  private lightTheme = 'light'
  private darkTheme = 'dark'

  @mutation changeTheme(value: string) {
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
