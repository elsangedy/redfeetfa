import { Fragment } from 'react'
import Head from 'next/head'

export default ({ children, title = 'Red Feet Futebol Americano' }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}

    <footer>{'I`m here to stay'}</footer>
  </Fragment>
)
