import { Component } from 'react'
// import dynamic from 'next/dynamic'

import { Container, Row, Col } from 'styled-bootstrap-grid'

import Main from '../components/main'
import Affix from '../components/affix'
import Title from '../components/title'
import Layout from '../components/layout'
import Section from '../components/section'
import Sponsor from '../components/sponsor'
import Banners, { BannerItem } from '../components/banners'
import Sidebar from '../components/sidebar'
import MainMenu from '../components/main-menu'
import LastGame from '../components/last-game'
import HeaderVideo from '../components/header-video'
import SectionTitle from '../components/section-title'
import ChampionshipTable from '../components/championship-table'
import Card, { CardBody, CardTag, CardImage, CardTitle, CardSubtitle } from '../components/card'

// const MainMenu = dynamic(import('../components/main-menu'))
// const LastGame = dynamic(import('../components/last-game'))
// const HeaderVideo = dynamic(import('../components/header-video'))
// const SectionTitle = dynamic(import('../components/section-title'))
// const ChampionshipTable = dynamic(import('../components/championship-table'))

export default class extends Component {
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

          <MainMenu />
        </Affix>

        <Main>
          <Banners>
            <BannerItem color="primary" />
            <BannerItem color="blue" />
            <BannerItem color="green" />
          </Banners>

          <Container>
            <Row>
              <Col lg="8">
                <Title>+ ÚLTIMAS NOTÍCIAS</Title>

                <Row>
                  <Col md="6">
                    <Card>
                      <CardImage src={require('../static/posts/post1.png')} />
                      <CardBody>
                        <CardTag>NOTÍCIAS</CardTag>
                        <CardTag color="green">PARANAENSE 2018</CardTag>
                        <CardTitle>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card>
                      <CardImage src={require('../static/posts/post2.png')} />
                      <CardBody>
                        <CardTag>NOTÍCIAS</CardTag>
                        <CardTag color="green">PARANAENSE 2018</CardTag>
                        <CardTitle>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card direction="row">
                      <CardImage size="md" src={require('../static/posts/post3.png')} />
                      <CardBody>
                        <CardTag>NOTÍCIAS</CardTag>
                        <CardTag color="green">PARANAENSE 2018</CardTag>
                        <CardTitle>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT</CardTitle>
                        <CardSubtitle>
                          <p>
                            Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet.
                          </p>
                          <p>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                            lobortis nisl ut commodo.
                          </p>
                        </CardSubtitle>
                      </CardBody>
                    </Card>
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
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
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

          <Section>
            <Container>
              <Row>
                <Col style={{ textAlign: 'center' }}>
                  <SectionTitle>PATROCINADORES</SectionTitle>

                  <Row>
                    <Col md="6" lg="4">
                      <Sponsor src={require('../static/patrocinadores/nike.png')} alt="Patrocinador Nike" />
                    </Col>
                    <Col md="6" lg="4">
                      <Sponsor src={require('../static/patrocinadores/nfl.png')} alt="Patrocinador NFL" />
                    </Col>
                    <Col md="6" lg="4">
                      <Sponsor
                        src={require('../static/patrocinadores/addidas.png')}
                        alt="Patrocinador Addidas"
                      />
                    </Col>
                    <Col md="6" lg="4">
                      <Sponsor src={require('../static/patrocinadores/nfl.png')} alt="Patrocinador NFL" />
                    </Col>
                    <Col md="6" lg="4">
                      <Sponsor
                        src={require('../static/patrocinadores/addidas.png')}
                        alt="Patrocinador Addidas"
                      />
                    </Col>
                    <Col md="6" lg="4">
                      <Sponsor src={require('../static/patrocinadores/nike.png')} alt="Patrocinador Nike" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
        </Main>
      </Layout>
    )
  }
}
