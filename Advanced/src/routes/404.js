'use strict'

import Page404 from '../pages/404.vue'

export default {
  path: "/:catchAll(.*)",
  name: "404",
  component: Page404
}
