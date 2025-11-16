import createCache from '@emotion/cache'

// This function creates an Emotion cache configured to insert styles
// at the start of the head to ensure correct priority ordering with other
// stylesheets. MUI recommends using a cache with key 'css' and prepend: true
// for client-side apps (consistent with the docs for Vite/CRA deployments).
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true })
}
