'use strict'

import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default async (to, from, next) => {
  let slug = to.params.slug ? to.params.slug : to.name
  if (slug === undefined) {
    return next()
  }

  const { data } = await axios.get(apiBaseUrl + '/posts?slug=' + slug)
  to.meta.layout = data[0].layout
  return next()
}
