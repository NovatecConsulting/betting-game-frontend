<template>
  <div>
    <div class="theme">
      <select
        v-model="theme"
        class="theme__options block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="light">☀️light</option>
        <option value="dark">🌓dark</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ThemeSwitcher extends Vue {
  // TODO: currentTheme should get its value bind (initialized) using store's value
  currentTheme = 'light'

  get theme() {
    return this.currentTheme
  }
  set theme(value: string) {
    this.$store.commit('changeTheme', value)
  }
}
</script>
