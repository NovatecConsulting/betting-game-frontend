<template>
  <div class="matchday min-w-screen bg-gray-100">
    <div class="matchday__table sm:px-8 md:py-4 overflow-x-auto">
      <MatchdayTable class="m-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MatchdayTable from '../components/MatchdayTable.vue'

@Component({
  components: { MatchdayTable }
})
export default class Matchday extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.matchday {
  min-height: calc(100vh - 64px);
}
</style>
