'use strict'

import { createApp } from './main'
import { renderToString } from '@vue/server-renderer'

export async function render(url, manifest) {
  const { app, router } = createApp()

  // Set the router to the desired URL before rendering
  router.push(url)
  await router.isReady()

  const html = await renderToString(app)
  return html
}
