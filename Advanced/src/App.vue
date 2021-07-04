<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
// The `:is` attribute is used for dynamic components.
// https://v3.vuejs.org/api/special-attributes.html#is
// https://v3.vuejs.org/guide/component-dynamic-async.html#dynamic-async-components
const defaultLayout = 'default'

import Dark from './layouts/dark.vue'
import Default from './layouts/default.vue'

export default {
  name: 'App',

  components: {
    Dark,
    Default
  },

  computed: {
    layout () {
      console.log('this.$route.meta.layout =', this.$route.meta.layout)
      return (this.$route.meta.layout || defaultLayout)
    }
  }
}
</script>
