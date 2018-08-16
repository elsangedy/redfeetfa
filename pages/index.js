import { Component } from 'react'

import { Container, Row, Col } from 'styled-bootstrap-grid'

import Affix from '../components/affix'
import Title from '../components/title'
import Sidebar from '../components/sidebar'
import LastGame from '../components/last-game'
import HeaderVideo from '../components/header-video'
import ChampionshipTable from '../components/championship-table'

import Main from '../components/atoms/main'
import Menu from '../components/organisms/menu'
import Layout from '../components/templates/layout'
import Banners from '../components/organisms/banners'
import Sponsors from '../components/organisms/sponsors'
import Featureds from '../components/organisms/featureds'

import * as api from '../utils/api'

export default class extends Component {
  static async getInitialProps() {
    const video = await api.video()
    const banners = await api.banners()
    const sponsors = await api.sponsors()
    const featured = await api.featured()

    return {
      video: video.data,
      banners: banners.results,
      sponsors: sponsors.results,
      featured: featured.data
    }
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return (
      <Layout>
        <Affix>
          <HeaderVideo video={this.props.video} />

          <Menu />
        </Affix>

        <Main>
          <Banners banners={this.props.banners} />

          <Container>
            <Row>
              <Col lg="8">
                <Title>+ ÚLTIMAS NOTÍCIAS</Title>

                <Featureds {...this.props.featured} />
              </Col>

              <Col lg="4">
                <Title>+ ACOMPANHE EM TEMPO REAL</Title>

                <Sidebar>
                  <LastGame />

                  <ChampionshipTable />
                </Sidebar>
              </Col>
            </Row>
          </Container>

          <Sponsors items={this.props.sponsors} />
        </Main>
      </Layout>
    )
  }
}
