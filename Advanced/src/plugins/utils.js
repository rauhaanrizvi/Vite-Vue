'use strict'

const baseUrl = import.meta.env.BASE_URL

export default {
  install: (app, options) => {
    if (options === undefined) {
      options = {}
    }
    app.config.globalProperties.$getAsset = file => {
      // Handling dynamic assets.
      // https://vitejs.dev/guide/features.html#glob-import
      // https://github.com/vitejs/vite/issues/1265
      const images = import.meta.globEager('/src/assets/images/*.{jpg,png,svg}')
      return images[`/src/assets/images/${file}`].default
    }

    app.config.globalProperties.$getStatic = file => {
      return '/static/' + file
    }

    // https://v3.vuejs.org/api/application-config.html#errorhandler
    // app.config.errorHandler = (err, vm, info) => {
    //   console.log('err ======', err)
    //   // handle error
    //   // `info` is a Vue-specific error info, e.g. which lifecycle hook
    //   // the error was found in
    // }

  }
}
