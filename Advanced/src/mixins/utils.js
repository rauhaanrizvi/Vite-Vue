'use strict'

const baseUrl = import.meta.env.BASE_URL

// https://v3.vuejs.org/guide/mixins.html#basics
export default {
  methods: {
    asset (file) {
      const images = import.meta.globEager('/src/assets/images/*.{jpg,png,svg}')
      return images[`/src/assets/images/${file}`].default
    },

    static (file) {
      return '/static/' + file
    }
  }
}
