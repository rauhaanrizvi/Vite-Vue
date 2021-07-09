'use strict'

// Getters are computed properties for stores.
// You can get the getter property data as follows in your template:
// {{ this.$store.getters.siteMenus }}
// https://next.vuex.vuejs.org/guide/getters.html
const getters = {
  siteMeta: state => {
    if (state.siteInfo) {
      return state.siteInfo.meta
    }
    return
  },

  siteMenus: state => {
    if (state.siteInfo) {
      return state.siteInfo.menus
    }
    return
  }
}

export default getters
