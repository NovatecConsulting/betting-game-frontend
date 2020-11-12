<template>
  <div class="navbar h-16 w-screen bg-teal-900 p-3 text-center overflow-hidden">
    <div class="navbar__content mx-auto flex flex-row ">
      <Logo />
      <div v-for="link in links" :key="link.name">
        <div class="navbar__link-wrapper ml-4">
          <router-link class="navbar__link relative text-xl text-blue-300 hover:text-white" :to="{ name: link.name }">
            {{ link.name }}
          </router-link>
        </div>
      </div>

      <LanguageSwitcher class="ml-4" />
      <ThemeSwitcher class="ml-4" />
      <UserNavItem v-if="user.isLoggedIn" :user="user" @logout="$emit('logout')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { routes } from '../router/index'
import { vxm } from '../store/store.vuex'
import Logo from '../components/Logo.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import UserNavItem from '../components/UserNavItem.vue'

@Component({
  components: { Logo, LanguageSwitcher, ThemeSwitcher, UserNavItem }
})
export default class Homepage extends Vue {
  user = vxm.user

  get links() {
    if (this.user.isLoggedIn) {
      return routes.filter(route => !route.meta?.anonymousContext)
    }
    return routes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
