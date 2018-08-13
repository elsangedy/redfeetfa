import { Component } from 'react'
// import dynamic from 'next/dynamic'

import { Container, Row, Col } from 'styled-bootstrap-grid'

import Affix from '../components/affix'
import Title from '../components/title'
import Banners, { BannerItem } from '../components/banners'
import Sidebar from '../components/sidebar'
import LastGame from '../components/last-game'
import HeaderVideo from '../components/header-video'
import ChampionshipTable from '../components/championship-table'
import Card, { CardBody, CardTag, CardImage, CardTitle, CardSubtitle } from '../components/card'

import Main from '../components/atoms/main'
import Menu from '../components/organisms/menu'
import Layout from '../components/templates/layout'
import Featured from '../components/molecules/featured'
import Sponsors from '../components/organisms/sponsors'

// const MainMenu = dynamic(import('../components/main-menu'))
// const LastGame = dynamic(import('../components/last-game'))
// const HeaderVideo = dynamic(import('../components/header-video'))
// const SectionTitle = dynamic(import('../components/section-title'))
// const ChampionshipTable = dynamic(import('../components/championship-table'))

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sponsors: [
        { url: 'clinica-de-fisioterapia-vida.jpeg', name: 'Clinica de Fisioterapia Vida' },
        { url: 'inhoatto.jpeg', name: 'Inhoatto' },
        {
          url: 'pasc-plano-assistencial-sao-cristovao.jpeg',
          name: 'PASC - Plano Assistencial São Cristovão'
        },
        { url: 'prefeitura-de-francisco-beltrao-2.jpeg', name: 'Prefeitura de Francisco VBeltrão' },
        { url: 'revetex-tintas-e-revestimentos.jpeg', name: 'Revetex - Tintas e Revistimentos' },
        { url: 'ruthes-contabilidade-e-assessoria.jpeg', name: 'Ruthes - Contabilidade e Assessoria' },
        { url: 'sony-frutas.jpeg', name: 'Sony Frutas' },
        { url: 'torkmaq-solucoes-metalicas.jpeg', name: 'Torkmaq - Soluções Metalicas' }
      ],
      featureds: {
        featured1: {
          id: '1',
          image: '/static/posts/post1.png',
          title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT',
          description: '',
          tags: [
            { id: '1', name: 'NOTÍCIAS', color: 'primary' },
            { id: '2', name: 'PARANAENSE 2018', color: 'green' }
          ]
        },
        featured2: {
          id: '2',
          image: '/static/posts/post2.png',
          title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT',
          description: '',
          tags: [
            { id: '1', name: 'NOTÍCIAS', color: 'primary' },
            { id: '2', name: 'PARANAENSE 2018', color: 'green' }
          ]
        },
        featured3: {
          id: '3',
          image: '/static/posts/post3.png',
          title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT',
          description: `
            <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut commodo.</p>
          `,
          tags: [
            { id: '1', name: 'NOTÍCIAS', color: 'primary' },
            { id: '2', name: 'PARANAENSE 2018', color: 'green' }
          ]
        },
        featured4: {
          id: '4',
          image: 'https://www.youtube.com/embed/kkmVlRax-AA?rel=0&amp;controls=0&amp;showinfo=0',
          title: 'Red Feet primeiro jogo',
          description: '',
          tags: [
            { id: '1', name: 'NOTÍCIAS', color: 'primary' },
            { id: '2', name: 'PARANAENSE 2018', color: 'green' }
          ]
        }
      }
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
          <HeaderVideo />

          <Menu />
        </Affix>

        <Main>
          <Banners>
            <BannerItem color="primary" src={require('../static/banners/banner1.jpg')} />
            <BannerItem color="blue" />
            <BannerItem color="green" />
          </Banners>

          <Container>
            <Row>
              <Col lg="8">
                <Title>+ ÚLTIMAS NOTÍCIAS</Title>

                <Row>
                  <Col md="6">
                    <Featured {...this.state.featureds.featured1} />
                  </Col>
                  <Col md="6">
                    <Featured {...this.state.featureds.featured2} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Featured {...this.state.featureds.featured3} direction="row" size="md" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card>
                      {/* <CardImage size="lg" /> */}
                      <iframe
                        title="Red Feet primeiro jogo"
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/kkmVlRax-AA?rel=0&amp;controls=0&amp;showinfo=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </Card>
                  </Col>
                </Row>
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

          <Sponsors items={this.state.sponsors} />
        </Main>
      </Layout>
    )
  }
}
