<template>
  <div class="bg-yellow-500">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>

    <button class="
      bg-gradient-to-r from-green-400 to-blue-500
      m-4 px-4 py-3 text-white text-center italic rounded cursor-default
      transition-all duration-400
      hover:rounded-2xl
      dark:(from-teal-400 to-yellow-500)
    ">Preview</button>

    <img src="@/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
    <img src="/static/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      data: {}
    }
  },

  async created () {
    // Vanilla fetch API.
    // let res = await fetch('http://localhost:3004/home')
    // this.data = await res.json()

    // Using a custom plugin
    // let res = await this.$fetch('/home')
    // this.data = await res.json()

    // Using a custom axios.
    let { data } = await this.$axios.get('/home')
    this.data = data
  }
}
</script>
