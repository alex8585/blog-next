import type { AppProps } from 'next/app';
import { wrapper } from "../store"
import "../styles/global.css"

const App = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
