<template>
  <div class="bg-yellow-500">
    <h1> {{ title }}</h1>
    <p> {{ contents }}</p>

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
      title: 'Home',
      description: 'Another awesome Vue app.',
      excerpt: 'Something short and punchy.',
      contents: 'Hello World!'
    }
  },
}
</script>
