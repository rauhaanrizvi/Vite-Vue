'use strict'

const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

export default async (to, from, next) => {
  let slug = to.params.slug ? to.params.slug : to.name
  if (slug === undefined) {
    return next()
  }

  const res = await fetch(apiBaseUrl + slug)
  const data = await res.json()
  to.meta.layout = data.layout
  return next()
}
