import type { AppProps } from 'next/app'
import { wrapper } from '../store'
import '../styles/global.css'
import React from 'react'
const App = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
