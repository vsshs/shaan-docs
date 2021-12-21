import 'nextra-theme-docs/style.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import nProgress from 'nprogress'
import "../styles/globals.css"

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
