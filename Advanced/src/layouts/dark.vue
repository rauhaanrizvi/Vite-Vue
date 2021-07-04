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
  height: 100vh;
  background-color: red;
  color: #fff;
}

.dark a {
  color: #fff;
}
</style>

