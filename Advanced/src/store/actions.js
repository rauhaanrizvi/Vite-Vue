'use strict'

import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default {
  async fetchSiteInfo ({ state, commit, rootState }) {

    // Get the data from the local storage.
    // Web Storage (localStorage and sessionStorage)
    let siteInfo = localStorage.getItem('site-info')

    // If the item exists, then parse it.
    if (siteInfo !== null) {
      siteInfo = JSON.parse(siteInfo)
    } else {
      const { data } = await axios.get(apiBaseUrl + 'site')

      // Store the data to the localStorage.
      // Like cookies, you only can store the data as string.
      siteInfo = JSON.stringify(data)
      localStorage.setItem('site-info', siteInfo)
    }
    // Remove localstorage data.
    // localStorage.removeItem('site-info')

    // commit('setSiteInfo', data)
    commit('setSiteInfo', siteInfo)
  }
}
