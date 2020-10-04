<template>
  <div class="h-full w-screen grid items-center mt-0 md:mt-1/12">
    <form @submit.prevent="login">
      <div class="md:w-1/2 w-full md:px-16 py-8 px-4 shadow-xl rounded grid items-center md:mx-auto">
        <span class="my-12 text-4xl font-bold">Login</span>
        <input
          class="w-full h-12 bg-gray-200 px-10 mb-4 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 appearance-none outline-none border-2 border-gray-200"
          type="text"
          :placeholder="$t('loginpage.username.placeholder')"
          v-model="username"
          required
        />
        <input
          class="w-full h-12 bg-gray-200 px-10 mb-4 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 appearance-none outline-none border-2 border-gray-200"
          type="password"
          :placeholder="$t('loginpage.password.placeholder')"
          v-model="password"
          required
        />
        <div class="buttons flex">
          <button
            type="submit"
            class="buttons__login px-8 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold outline-none select-none mr-4 focus:outline-none"
          >
            {{ $t('loginpage.login.button') }}
          </button>
          <button
            type="button"
            class="buttons__forgot px-8 h-12 rounded-full bg-background font-bold border-2 border-secondary focus:outline-none"
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

@Component
export default class Login extends Vue {
  username = ''
  password = ''
  user = vxm.user

  async login() {
    await this.user.login({
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
<style scoped></style>
