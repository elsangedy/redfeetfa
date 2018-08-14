import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { injectLayoutBaseCSS, media } from 'styled-bootstrap-grid'
import styledNormalize from 'styled-normalize'

import ga from '../utils/ga'

Router.onRouteChangeError = () => NProgress.done()
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = url => {
  NProgress.done()
  ga(url)
}

const theme = {
  primary: '#cd1338',
  dark: '#08080a',
  background: '#eff3f6',

  green: '#31984d',
  blue: '#213e78'
}

injectLayoutBaseCSS()

injectGlobal`
  ${styledNormalize}

  body {
    font-family: 'Rockwell', serif;
    background-color: ${theme.background};
    color: ${theme.dark};
  }

  .affix {
    position: fixed;
    top: calc((100vh - 50px) * -1);
    left: 0;
    width: 100%;
    z-index: 99;

    ${media.lg`
      top: calc((100vh - 130px) * -1);
    `};
  }

  .affix + main {
    margin-top: 100vh;
  }

  #nprogress {
    pointer-events: none;

    .bar {
      background: ${theme.primary};
      position: fixed;
      z-index: 99999999;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }

    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${theme.primary}, 0 0 5px ${theme.primary};
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }

    .spinner {
      display: none;
    }
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
