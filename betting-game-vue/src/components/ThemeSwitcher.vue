<template>
  <div>
    <div class="theme">
      <button class="mode focus:outline-none" @click="switchTheme()"></button>
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

  switchTheme() {
    if (this.theme) {
      const theme = this.theme === 'light' ? 'dark' : 'light'
      this.$store.commit(`theme/${THEME_CHANGE_THEME}`, theme)
    }
  }
}
</script>
<style scoped lang="scss">
.mode {
  @apply bg-teal-600;
  border-radius: 30px;
  width: 58px;
  position: relative;
  margin-top: -2px;
  height: 32px;
  flex-shrink: 0;
}

.mode::before {
  width: 32px;
  height: 100%;
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2.4' fill='gold' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cpath d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/%3E%3C/svg%3E");
  background-size: cover;
  left: 0;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  background-size: 50%;
  transition: 0.3s;
  background-position: center;
}

.mode::after {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  top: 6px;
  background-color: var(--main-500);
  content: '';
  border-radius: 50%;
  transition: transform 0.3s;
}

.dark .mode {
  background-color: rgba(255, 255, 255, 0.1);
}
.dark .mode::after {
  transform: translateX(-24px);
}
.dark .mode::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2' fill='white' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/%3E%3C/svg%3E");
  transform: translateX(26px);
}
</style>
