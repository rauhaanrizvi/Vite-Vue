'use strict'

import axios from 'axios'

export default {
  install: (app, options) => {
    if (options === undefined) {
      options = {}
    }
    app.config.globalProperties.$axios = axios.create({
      baseURL: import.meta.env.VITE_REMOTE_API_BASE_URL

      // Or, using options to set the remote API base URL.
      // baseURL: options.baseUrl
    })
  }
}
