<template>
  <div>
    <slot/>
    <current-breakpoint/>
  </div>
</template>

<script>
import CurrentBreakpoint from '@/components/current-breakpoint.vue'

export default {
  name: 'default',

  components: {
    CurrentBreakpoint
  }
}
</script>
