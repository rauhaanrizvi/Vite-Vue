<template>
  <div class="dark">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'dark',
}
</script>

<style scoped>
.dark {
  background-color: red;
}
</style>

