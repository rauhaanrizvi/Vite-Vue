'use strict'

import Errors from '../pages/errors.vue'

export default {
  path: '/:pathMatch(.*)*',
  name: 'errors',
  component: Errors
}
