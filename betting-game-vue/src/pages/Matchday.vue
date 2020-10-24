<template>
  <div class="min-w-screen">
    <MatchdayTable class="m-auto" />
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
<style scoped></style>
