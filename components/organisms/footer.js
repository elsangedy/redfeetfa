import Link from 'next/link'

import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  background-color: ${props => props.theme.primary};
  padding-bottom: 40px;
`

const FooterLogo = styled.img`
  margin-top: -30px;
  height: 100px;
  text-align: center;
`

const FooterLinksTitle = styled.div`
  text-align: left;
  margin: 40px 0 20px;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.theme.dark};
`

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const FooterLinksItem = styled.li`
  cursor: pointer;
  text-align: left;
  color: #fff;
  padding: 10px 0;
`

export default () => (
  <Footer>
    <FooterLogo src={require('../../static/images/red-feet-symbol.svg')} alt="Red Feet Logo" />

    <Container>
      <Row>
        <Col md="4">
          <FooterLinksTitle>LINKS</FooterLinksTitle>

          <FooterLinks>
            <Link href="/patrocinadores">
              <FooterLinksItem>Patrocinadores</FooterLinksItem>
            </Link>
            <Link href="/torcedor">
              <FooterLinksItem>Torcedor</FooterLinksItem>
            </Link>
            <Link href="/tabela-de-jogos">
              <FooterLinksItem>Tabela de Jogos</FooterLinksItem>
            </Link>
            <Link href="/noticias">
              <FooterLinksItem>Blog</FooterLinksItem>
            </Link>
            <Link href="/loja-red-feet">
              <FooterLinksItem>Produtos Oficiais</FooterLinksItem>
            </Link>
          </FooterLinks>
        </Col>
        <Col md="4">
          <FooterLinksTitle>RED FEET</FooterLinksTitle>

          <FooterLinks>
            <Link href="/historia">
              <FooterLinksItem>História</FooterLinksItem>
            </Link>
            <Link href="/titulos">
              <FooterLinksItem>Títulos</FooterLinksItem>
            </Link>
            <Link href="/jogadores">
              <FooterLinksItem>Jogadores</FooterLinksItem>
            </Link>
            <Link href="/uso-da-marca">
              <FooterLinksItem>Uso da Marca</FooterLinksItem>
            </Link>
          </FooterLinks>
        </Col>
        <Col md="4">
          <FooterLinksTitle>ACOMPANHE</FooterLinksTitle>

          <FooterLinks>
            <Link href="https://fb.com/sudoesteredfeet">
              <FooterLinksItem>/REDFEET</FooterLinksItem>
            </Link>
            <Link href="https://twitter.com/sudoesteredfeet">
              <FooterLinksItem>@REDFEET</FooterLinksItem>
            </Link>
            <Link href="/">
              <FooterLinksItem>contato@redfeetfa.com.br</FooterLinksItem>
            </Link>
          </FooterLinks>
        </Col>
      </Row>
    </Container>
  </Footer>
)
