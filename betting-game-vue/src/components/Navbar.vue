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
    </div>
  </div>
</template>

<script>
import routes from '../router/index'
import Logo from '../components/Logo.vue'
export default {
  name: 'Homepage',
  components: {
    Logo
  },
  data() {
    return {
      links: routes.options.routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
