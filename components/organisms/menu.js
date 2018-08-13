import { Component } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid'

import ModalMenu from '../modal-menu'

import Nav from '../atoms/nav'
import Navbar from '../atoms/navbar'
import NavbarItem from '../atoms/navbar-item'
import NavbarItems from '../atoms/navbar-items'

const Logo = styled.img`
  z-index: 999;
  width: 80px;

  ${media.lg`
    width: 150px;
    margin-top: -52px;
  `};

  ${media.xl`
    width: 200px;
    margin-top: -70px;
  `};
`

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  render() {
    const { isOpen } = this.state

    return (
      <Nav>
        <Container>
          <Row>
            <Col>
              <Navbar>
                <NavbarItem href="/">
                  <img
                    src={require('../../static/images/home-icon.svg')}
                    alt="Página Inicial"
                    id="btn-home"
                  />
                  <img
                    src={require('../../static/images/menu-icon.svg')}
                    alt="Menu Principal"
                    id="btn-menu"
                    onClick={this.handleToggle}
                  />
                </NavbarItem>

                <NavbarItems>
                  <Link href="/historia">
                    <NavbarItem>RED FEET</NavbarItem>
                  </Link>

                  <Link href="/patrocinadores">
                    <NavbarItem>PATROCINADORES</NavbarItem>
                  </Link>

                  <Link href="/torcedor">
                    <NavbarItem>TORCEDOR</NavbarItem>
                  </Link>
                </NavbarItems>

                <Link href="/">
                  <Logo src={require('../../static/images/red-feet-header.svg')} alt="Logotipo Red Feet" />
                </Link>

                <NavbarItems>
                  <Link href="/tabela-de-jogos">
                    <NavbarItem>TABELA DE JOGOS</NavbarItem>
                  </Link>

                  <Link href="/noticias">
                    <NavbarItem>BLOG</NavbarItem>
                  </Link>

                  <Link href="/loja">
                    <NavbarItem>PRODUTOS OFICIAIS</NavbarItem>
                  </Link>
                </NavbarItems>

                <NavbarItem>
                  <img src={require('../../static/images/search-icon.svg')} alt="Busca no site" />
                </NavbarItem>
              </Navbar>
            </Col>
          </Row>
        </Container>

        <ModalMenu isOpen={isOpen} onClose={this.handleToggle} />
      </Nav>
    )
  }
}
