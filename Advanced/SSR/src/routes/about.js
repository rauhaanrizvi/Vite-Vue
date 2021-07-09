'use strict'

import About from '@/pages/about.vue'
import Log from '@/middleware/log'

// import Layout from '@/middleware/layout/fetch'
import Layout from '@/middleware/layout/axios'

export default {
  name: 'about',
  path: '/about',

  // Set the layout manually.
  // meta: { layout: 'dark'},

  // Set the layout dynamically only to this route.
  // Set multiple guards.
  // https://github.com/vuejs/vue-router/issues/721#issuecomment-425163248
  beforeEnter: [Log, Layout],

  component: About
}
