import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags
    }
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <title>Red Feet Futebol Americano</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Francisco Beltrão Red Feet Futebol Americano" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#cd1338" />
          <link rel="shortcut icon" href="/static/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" href="/static/icons/icon-72x72.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="apple-mobile-web-app-title" content="Hacker News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="styleshet" type="text/css" href="/static/css/fonts.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-32492125-4"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-32492125-4');
          </script>
        </body>
      </html>
    )
  }
}
