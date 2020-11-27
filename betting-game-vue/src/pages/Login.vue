<template>
  <div class="login main-content w-screen p-4 grid items-center mt-0 md:mt-1/12 bg-gray-100 dark:bg-gray-800">
    <form @submit.prevent="login">
      <div class="md:w-1/2 w-full md:px-8 py-16 px-8 shadow-xl rounded grid items-center md:mx-auto dark:bg-gray-900">
        <span class="mb-12 text-4xl font-boldm text-gray-700 dark:text-gray-300">Login</span>
        <input
          class="login__input-field"
          type="text"
          :placeholder="$t('loginpage.username.placeholder')"
          v-model="username"
          required
        />
        <input
          class="login__input-field"
          type="password"
          :placeholder="$t('loginpage.password.placeholder')"
          v-model="password"
          required
        />
        <div class="buttons flex mt-8">
          <button
            type="submit"
            class="buttons__login px-8 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold outline-none select-none mr-4 focus:outline-none"
          >
            {{ $t('loginpage.login.button') }}
          </button>
          <button
            type="button"
            class="buttons__forgot px-8 h-12 text-sm rounded-full bg-background font-bold border-2 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 focus:outline-none text-gray-700 dark:text-gray-300"
          >
            {{ $t('loginpage.forgotpassword.button') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from '../store/store.vuex'
import { USER_LOGIN } from '../store/actions'

@Component
export default class Login extends Vue {
  username = ''
  password = ''
  user = vxm.user

  async login() {
    await this.user[USER_LOGIN]({
      username: this.username,
      password: this.password
    })

    if (this.user.isLoggedIn) {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login__input-field {
  @apply w-full h-12 px-10 mb-4 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none focus:bg-white dark:focus:bg-gray-900 hover:bg-gray-300 focus:border-blue-500 dark:focus:border-blue-500 appearance-none outline-none border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300;
}
</style>
