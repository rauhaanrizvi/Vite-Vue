'use strict'

const baseUrl = import.meta.env.BASE_URL

export default {
  install: (app, options) => {
    if (options === undefined) {
      options = {}
    }
    app.config.globalProperties.$asset = file => {
      // Handling dynamic assets.
      // https://vitejs.dev/guide/features.html#glob-import
      // https://github.com/vitejs/vite/issues/1265
      const images = import.meta.globEager('/src/assets/images/*.{jpg,png,svg}')
      return images[`/src/assets/images/${file}`].default
    }

    app.config.globalProperties.$static = file => {
      return '/static/' + file
    }
  }
}
