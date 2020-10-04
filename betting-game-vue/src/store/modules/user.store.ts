import { createModule, action, mutation } from 'vuex-class-component'

const VuexModule = createModule({
  strict: false
})

export class UserStore extends VuexModule {
  private user: string = ''

  @mutation setUser(value: string) {
    this.user = value
  }

  @action async login({ username }: any) {
    // @TODO jose service request here...
    this.setUser(username)
  }

  @action async logout() {
    this.setUser('')
  }

  get username() {
    return this.user
  }

  get isLoggedIn(): Boolean {
    return Boolean(this.user)
  }
}
