<template>
  <div class="navbar h-16 w-screen bg-gray-900 p-3 text-center overflow-hidden">
    <div class="navbar__content mx-auto flex flex-row ">
      <Logo />
      <div v-for="link in links" :key="link.name">
        <div class="navbar-link-wrapper ml-4">
          <router-link class="navbar__link relative text-xl text-blue-300 hover:text-white" :to="{ name: link.name }">
            {{ link.name }}
          </router-link>
        </div>
      </div>

      <LanguageSwitcher class="ml-4" />
      <ThemeSwitcher class="ml-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import routes from '../router/index'
import Logo from '../components/Logo.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'

@Component({
  components: { Logo, LanguageSwitcher, ThemeSwitcher }
})
export default class Homepage extends Vue {
  links = routes.options.routes
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
