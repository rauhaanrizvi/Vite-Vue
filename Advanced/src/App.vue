<template>
  <div>
    <component :is="layout">
      <nav v-if="this.$store.getters.siteMenus">
        <ul>
          <li v-for="(item, index) in this.$store.getters.siteMenus.header">
            <router-link :to="item.path">{{ item.title }}</router-link>
          </li>
        </ul>
      </nav>
      <router-view/>
    </component>
  </div>
</template>

<script>
// The `:is` attribute is used for dynamic components.
// https://v3.vuejs.org/api/special-attributes.html#is
// https://v3.vuejs.org/guide/component-dynamic-async.html#dynamic-async-components
const defaultLayout = 'default'

// The layouts are components and they are registered locally in the `components` option:
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
      return (this.$route.meta.layout || defaultLayout)
    }
  },

  created () {
    this.$store.dispatch('fetchSiteInfo')
  },
}
</script>
