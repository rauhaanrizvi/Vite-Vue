<template>
  <div class="dark">
    <slot/>
    <current-breakpoint/>
  </div>
</template>

<script>
import CurrentBreakpoint from '@/components/current-breakpoint.vue'

export default {
  name: 'dark',

  components: {
    CurrentBreakpoint
  }
}
</script>

<style scoped>
.dark {
  background-color: red;
}
</style>

