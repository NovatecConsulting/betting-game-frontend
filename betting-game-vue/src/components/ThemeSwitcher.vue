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
import { vxm } from '../store/store.vuex'
import { THEME_CHANGE_THEME } from '../store/actions'

@Component
export default class ThemeSwitcher extends Vue {
  get theme() {
    return vxm.theme.theme
  }

  set theme(value: string) {
    this.$store.commit(`theme/${THEME_CHANGE_THEME}`, value)
  }
}
</script>
