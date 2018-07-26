import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider, injectGlobal } from 'styled-components'

Router.onRouteChangeError = () => NProgress.done()
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()

const theme = {
  primary: '#cd1338',
  dark: '#08080a'
}

injectGlobal`
  body {
    font-family: 'Rockwell', serif;
    background-color: #eff3f6;
    color: #08080a;
  }
`

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
