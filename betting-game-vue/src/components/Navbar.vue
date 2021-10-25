<template>
  <div class="relative dark:bg-gray-800 bg-white">
    <header class="overflow-hidden  z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto ">
      <div class="container h-16 mx-auto flex flex-row items-center justify-center">
        <Logo class="mr-2" />
        <router-link
          v-for="link in links"
          :key="link.name"
          class="navbar__link h-full text-xl text-blue-600 hover:text-blue-500 transition duration-150 hidden md:block"
          :to="{ name: link.name }"
          exact
        >
          <div class="h-full mx-2 flex items-center text-sm md:text-xl">
            {{ link.name }}
          </div>
        </router-link>

        <LanguageSwitcher class="ml-4 hidden md:block" />
        <ThemeSwitcher class="ml-4 hidden md:block" />
        <UserNavItem v-if="user.isLoggedIn" class=" hidden md:block" :user="user" @logout="$emit('logout')" />
      </div>
    </header>
    <div class="absolute md:hidden top-0 right-0 mr-6 mt-6">
      <button class="toggle-button" :class="{ 'rotate-icons': isSidebarActive }" @click="toggleButton()">
        <div class="icon-bar1 "></div>
        <div class="icon-bar2 mt-2"></div>
      </button>
    </div>
    <div
      class="absolute h-0 z-10 overflow-hidden w-full bg-gray-300 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 transition duration-150 flex flex-col justify-start items-end"
      :class="{ 'h-screen': isSidebarActive }"
    >
      <router-link
        v-for="link in links"
        :key="link.name"
        class="navbar__link h-16 text-xl text-blue-600 hover:text-blue-500 transition duration-150"
        :to="{ name: link.name }"
        exact
      >
        <div class="h-full mr-4 ml-16 flex items-center text-sm md:text-xl text-right">
          {{ link.name }}
        </div>
      </router-link>
      <LanguageSwitcher class="my-2" />
      <ThemeSwitcher />
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
  isSidebarActive = false
  toggleButton() {
    this.isSidebarActive = !this.isSidebarActive
  }
  get links() {
    if (this.user.isLoggedIn) {
      return routes.filter(route => !route.meta?.anonymousContext)
    }
    return routes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active {
  @apply border-r-4 md:border-r-0 md:border-b-4 border-teal-600 md:bg-gradient-to-t bg-gradient-to-l from-teal-300 dark:from-teal-800 to-transparent text-teal-900 dark:text-teal-400;
}
.toggle-button {
  @apply cursor-pointer bg-none float-right border-none;
}
.icon-bar1,
.icon-bar2 {
  @apply bg-gray-600 dark:bg-gray-100 px-2 w-8 h-0.5 transition duration-500;
}
.rotate-icons .icon-bar1 {
  transform: rotate(-45deg) translate(-9px, 6px);
  -webkit-transform: rotate(-45deg) translate(-2px, 3px);
}
.rotate-icons .icon-bar2 {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg) translate(-4px, -5px);
}
</style>
