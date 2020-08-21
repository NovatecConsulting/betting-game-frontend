<template>
  <div>
    <div class="language">
      <select
        v-model="$i18n.locale"
        class="language__options block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿English</option>
        <option value="de">🇩🇪Deutsch</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LanguageSwitcher extends Vue {
  setLocale(locale: string) {
    this.$i18n.locale = locale
  }
}
</script>
