<template>
  <div id="app" class="light">
    <Navbar @logout="logout" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from './store/store.vuex'
import Navbar from './components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  user = vxm.user

  async logout() {
    await this.user.logout()
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
