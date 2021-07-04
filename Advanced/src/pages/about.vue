<template>
  <div class="bg-green-500">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>
    <div class="box">
      <div class="text-center space-y-2">
        <div class="space-y-0.5">
          <p class="text-lg text-black dark:text-white font-semibold mb-2">
            Erin Lindford
          </p>
          <p class="text-gray-500 dark:text-gray-300 font-medium pb-3">
            Product Engineer
          </p>
        </div>
        <button class="btn">
          Message
        </button>
      </div>
    </div>
    <img src="@/assets/images/sven-scheuermeier-VNseEaTt9w4-unsplash.jpg">
    <img src="/static/luca-bravo-oV4bR3YoR_s-unsplash.jpg">
  </div>
</template>

<script>
export default {
  name: 'about',

  data () {
    return {
      data: {}
    }
  },

  // beforeRouteEnter(to, from, next) {
  //   console.log('to =========', to)
  //   next()
  // },

  async created () {
    // Vanilla fetch API.
    // let res = await fetch('http://localhost:3004/posts/2')
    // this.data = await res.json()

    // Using a custom plugin
    let res = await this.$fetch('/posts/2')
    this.data = await res.json()
  }

  // Override global meta in App.vue and in mixin.
  // metaInfo () {
  //   return {
  //     title: 'About',
  //     meta: [
  //       {
  //         vmid: 'description',
  //         name: 'description',
  //         content: 'About me...'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style>
  .box {
    @apply
      py-8 px-8 max-w-sm mx-auto
      bg-white dark:bg-gray-400 dark:bg-opacity-10
      rounded-xl shadow-md space-y-2
      sm:py-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-6;
  }
  .btn {
    @apply
      px-4 py-1 text-sm text-purple-600 font-semibold
      rounded-full border border-purple-200 dark:border-purple-800
      hover:text-white hover:bg-purple-600 hover:border-transparent
      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  }
</style>
