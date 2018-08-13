import { Fragment } from 'react'
import Head from 'next/head'

import Footer from '../organisms/footer'

export default ({
  children,
  title = 'Red Feet Futebol Americano',
  description = 'O Francisco Beltrão Red Feet é a primeira e única equipe de futebol americano no sudoeste do Paraná. Fundada em 26/02/11, a equipe conta com cerca de 60 atletas dos municípios de vários municípios do Sudoeste do Paraná os quais vivem focados pela excelência e máxima competitividade dentro e fora de campo, como um estilo de vida. Nasceu Dois Vizinhos Red Feet, mudou para Sudoeste Red Feet e atualmente leva o nome da cidade de Francisco Beltrão. Em sua história foi campeão da primeira Copa Fronteira, em 2016, campeão do 1º Pinhão Bowl, em 2017, ano que chegou às semifinais do Campeonato Paranaense.'
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

      <meta property="og:site_name" content="Red Feet Futebol Americano" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://redfeetfa.com.br/static/images/red-feet-header.svg" />
      <meta property="og:url" content="https://redfeetfa.com.br/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Red Feet Futebol Americano" />
    </Head>

    {children}

    <Footer />
  </Fragment>
)
