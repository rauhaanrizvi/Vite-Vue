'use strict'

// Import styles.
import './styles'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

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

createApp(App)
  .use(Router)
  .use(Store)

  // Make plugins global.
  .use(PluginUtils)
  .use(PluginFetch)
  .use(PluginAxios, { baseUrl: 'http://localhost:3004/' })

  // Make mixins global.
  .mixin(MixinsUtils)

  // Finally mount the app to #app.
  .mount('#app')
