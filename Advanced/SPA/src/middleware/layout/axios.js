'use strict'

import axios from 'axios'

export default async (to, from, next) => {
  let slug = to.params.slug ? to.params.slug : to.name
  if (slug === undefined) {
    return next()
  }

  const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL
  const { data } = await axios.get(apiBaseUrl + slug)
  to.meta.layout = data.layout
  return next()
}
