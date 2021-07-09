<template>
  <div class="bg-green-500">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'contact',

  data () {
    return {
      data: {}
    }
  },

  async created () {
    // Vanilla fetch API.
    // let res = await fetch('http://localhost:3004/contact')
    // this.data = await res.json()

    // Using a custom plugin
    // let res = await this.$fetch('/contact')
    // this.data = await res.json()

    // Using a custom axios.
    let { data } = await this.$axios.get('/contact')
    this.data = data
  }
}
</script>
