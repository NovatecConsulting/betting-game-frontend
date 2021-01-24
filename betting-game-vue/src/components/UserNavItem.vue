<template>
  <div>
    <div class="navbar-link-wrapper ml-4">
      <span class="text-xl text-blue-100">User: {{ user.user }}</span>
      <a
        href="#"
        @click.prevent="$emit('logout')"
        class="navbar__link relative text-xl text-blue-300 hover:text-white ml-4"
      >
        {{ $t('loginpage.logout.button') }}
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    user: Object
  }
})
export default class UserNavItem extends Vue {}
</script>
