'use strict'

import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

// Import plugins.
import Fetch from './plugins/fetch'
import Axios from './plugins/axios'

// Set the layout middleware to all routes globally.
// import Layout from './middleware/layout/fetch'
// import Layout from './middleware/layout/axios'
// router.beforeEach(Layout)

createApp(App)
  .use(Router)
  .use(Fetch)
  .use(Axios, { baseUrl: 'http://localhost:3004' })
  .mount('#app')
