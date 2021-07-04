'use strict'

// Create a custom fetch api with a base url just like you can do it with axios.
// https://blog.logrocket.com/axios-or-fetch-api/
// https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/
// https://stackoverflow.com/a/61797794/413225

// https://v3.vuejs.org/guide/plugins.html#writing-a-plugin
// https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default {
  install: (app, options) => {
    if (options === undefined) {
      options = {}
    }
    app.config.globalProperties.$fetch = (url, ...params) => {
      return url.startsWith('/') ? fetch(apiBaseUrl + url, ...params) : fetch(url, ...params)
    }
  }
}
