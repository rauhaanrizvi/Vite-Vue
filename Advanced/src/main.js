'use strict'

import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Install plugins.
import Fetch from './plugins/fetch'

// Get middleware
import Layout from './middleware/layout'

// Apply layout middleware to all routes,
router.beforeEach(Layout)

createApp(App)
  .use(router)
  .use(Fetch)
  .mount('#app')
