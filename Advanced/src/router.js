'use strict'

// import Vue from 'vue'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import Routes from './routes'

// Create the router.
export default createRouter({
  // Remove # from the URLs.
  history: createWebHistory(),

  // Enable # on the URLs.
  // history: createWebHashHistory(),

  routes: Routes
})
