<template>
  <div id="app">
    <Navbar @logout="logout" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from './store/store.vuex'
import Navbar from './components/Navbar.vue'
import { USER_LOGOUT } from './store/actions'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  user = vxm.user

  async logout() {
    await this.user[USER_LOGOUT]()
    this.$router.push('login')
  }
}
</script>

<style style="scss">
@import 'assets/theme.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
