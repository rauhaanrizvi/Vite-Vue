<template>
  <div class="bg-blue-500">
    <h1>Error</h1>
    <p>{{ this.$route.params.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'errors'
}
</script>
