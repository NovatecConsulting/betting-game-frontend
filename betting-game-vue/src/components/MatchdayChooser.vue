<template>
  <div class="max-w-2xl h-10 px-6 mx-0 sm:mx-12 bg-white dark:bg-gray-900 rounded-md">
    <select class="mt-2 w-full dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <option v-for="opt of options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MatchdayChooser extends Vue {
  options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
</script>
