'use strict'

import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default {
  async fetchSiteInfo ({ state, commit, rootState }) {
    // Web Storage: localStorage and sessionStorage. The localStorage and
    // sessionStorage properties allow to save key/value pairs in a web browser.
    // The sessionStorage object stores data for only one session (the data is
    // deleted when the browser tab is closed).

    // Get the data from the session storage.
    let item = sessionStorage.getItem('site-info')

    // If the item exists, then parse it.
    if (item !== null) {
      var data = JSON.parse(item)
    } else {
      var { data } = await axios.get(apiBaseUrl + 'site')

      // Store the data to the sessionStorage.
      // Like cookies, you only can store the data as string.
      sessionStorage.setItem('site-info', JSON.stringify(data))
    }
    // Remove an item from the session storage.
    // sessionStorage.removeItem('site-info')

    // Remove all saved data in the session storage.
    // sessionStorage.clear()

    commit('setSiteInfo', data)
  }
}
