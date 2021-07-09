<template>
  <div class="bg-green-500">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>
  </div>
</template>

<script>
import axios from '@/modules/axios'

export default {
  name: 'contact',

  data () {
    return {
      data: {}
    }
  },

  async created () {
    let { data } = await axios.get('/contact')
    this.data = data
  }
}
</script>
