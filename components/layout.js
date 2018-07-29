import { Fragment } from 'react'
import Head from 'next/head'

import Footer from './footer'

export default ({
  children,
  title = 'Red Feet Futebol Americano',
  description = 'Francisco Beltrão Red Feet Futebol Americano"'
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta type="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#cd1338" />
      <link rel="shortcut icon" href="/static/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" href="/static/icons/icon-72x72.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="apple-mobile-web-app-title" content="Hacker News" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>

    {children}

    <Footer />
  </Fragment>
)
