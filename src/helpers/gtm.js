// Google Tag Manager loads only after the visitor grants consent for
// statistics cookies. Until then the site sends nothing to Google.
// The GTM container currently holds only Google Analytics (statistics).
// If marketing tags are added to the container, extend the condition in
// cookies.js so GTM also loads after marketing consent.

const GTM_ID = 'GTM-T89S9LL'
const ROUTE_CHANGE_EVENT = 'gatsby-route-change'

let gtmLoaded = false

export function isGtmLoaded() {
  return gtmLoaded
}

export function loadGtm() {
  if (gtmLoaded || typeof window === 'undefined') return
  // Like includeInDevelopment: false in the old plugin, so `gatsby develop` sends no real hits.
  if (process.env.NODE_ENV !== 'production') return
  gtmLoaded = true

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  // The Google Analytics tag in GTM fires on this event, so it counts the current page.
  window.dataLayer.push({ event: ROUTE_CHANGE_EVENT })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

export function pushRouteChange() {
  if (!gtmLoaded || typeof window === 'undefined') return
  // Same delay as gatsby-plugin-google-tagmanager, so the page title is already updated.
  setTimeout(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: ROUTE_CHANGE_EVENT })
  }, 50)
}

// Removes Google Analytics cookies (_ga, _ga_XXXX) after consent is withdrawn.
// GA sets them on the main domain, so every parent domain is tried.
export function removeAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const names = document.cookie
    .split(';')
    .map(cookie => cookie.trim().split('=')[0])
    .filter(name => name.startsWith('_ga'))
  if (!names.length) return

  const parts = window.location.hostname.split('.')
  const domains = ['']
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`.${parts.slice(i).join('.')}`)
  }

  names.forEach(name => {
    domains.forEach(domain => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`
    })
  })
}
