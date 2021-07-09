'use strict'

import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default {
  async fetchSiteInfo ({ state, commit, rootState }) {
    // If window is undefined, then your are on the server side.
    if (typeof window === 'undefined') {
      //
    }

    var { data } = await axios.get(apiBaseUrl + 'site')
    commit('setSiteInfo', data)
  }
}
