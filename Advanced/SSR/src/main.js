'use strict'

// Import styles.
import './styles'

import store from './store'

// Import mixins.
import MixinsUtils from './mixins/utils'

// Import plugins.
import PluginUtils from './plugins/utils'
import PluginFetch from './plugins/fetch'
import PluginAxios from './plugins/axios'

// Set the layout middleware to all routes globally.
// import Layout from './middleware/layout/fetch'
// import Layout from './middleware/layout/axios'
// router.beforeEach(Layout)

import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp () {
  const app = createSSRApp(App)
  const router = createRouter()
  app
    .use(router)
    .use(store)

//   // Make plugins global.
//   .use(PluginUtils)
//   .use(PluginFetch)
//   .use(PluginAxios, { baseUrl: 'http://localhost:3004/' })

//   // Make mixins global.
//   .mixin(MixinsUtils)

  return { app, router }
}
