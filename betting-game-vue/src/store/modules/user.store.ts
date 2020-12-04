import { createModule, action, mutation } from 'vuex-class-component'
import { USER_LOGIN, USER_LOGOUT, USER_SET } from '../actions'
const VuexModule = createModule({
  strict: false
})

export class UserStore extends VuexModule {
  private user: string = '';

  @mutation [USER_SET](value: string) {
    this.user = value
  }

  @action async [USER_LOGIN]({ username }: any) {
    // @TODO jose service request here...
    this[USER_SET](username)
  }

  @action async [USER_LOGOUT]() {
    this[USER_SET]('')
  }

  get username() {
    return this.user
  }

  get isLoggedIn(): Boolean {
    return Boolean(this.user)
  }
}
