<template>
  <div>
    <svg
      class="accent-color-gradients"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 0 0"
      height="0"
      width="0"
      style="position: absolute;"
    >
      <defs>
        <linearGradient id="accent-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" class="stop-1" style="stop-opacity: 1"></stop>
          <stop offset="100%" class="stop-0" style="stop-opacity: 1"></stop>
        </linearGradient>
      </defs>
    </svg>
    <svg
      class="relative inline-block"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 300 300"
    >
      <path
        id="signet"
        d="M15.06,132.13C-4.9,326.06,62.33,213.91,134,92.59,218.67-50.73,279.32-6.24,291.77,250.73,300.73,435.32,41.23-122,15.06,132.13Z"
        transform="translate(-0.5 -0.88)"
        fill="none"
        stroke="url(#accent-gradient)"
        stroke-miterlimit="10"
        stroke-width="22"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Loading extends Vue {}
</script>
<style scoped>
#signet {
  will-change: stroke-dasharray;
  stroke-dasharray: 0 1130.725;
  stroke-dashoffset: 0;
  -webkit-animation: dash 2s ease infinite;
  animation: dash 2s ease infinite;
}
@keyframes dash {
  0% {
    stroke-dasharray: 0 1130.725;
  }
  100% {
    stroke-dasharray: 1130.725 1130.725;
    opacity: 1;
  }
}
.stop-0 {
  stop-color: #e9454e;
}

.stop-1 {
  stop-color: #5b4897;
}
</style>
