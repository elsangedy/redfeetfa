import { Component } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid'

import ModalMenu from './modal-menu'

const Nav = styled.nav`
  height: 50px;
  background-color: ${props => props.theme.background};
  box-shadow: 0px -1px 10px #333;

  [data-name='container'],
  [data-name='row'],
  [data-name='col'] {
    height: 100%;
  }
`

const Navbar = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const NavbarItems = styled.div`
  height: 100%;
  flex: 1;
  justify-content: space-between;
  display: none;

  ${media.lg`
    display: flex;
  `};
`

const MenuLink = styled.a`
  height: 100%;
  cursor: pointer;
  color: ${props => props.theme.dark};
  font-size: 14px;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;

  img {
    width: 24px;

    &#btn-home {
      display: none;
    }

    &#btn-menu {
      width: 32px;
    }

    ${media.lg`
      width: 16px;

      &#btn-home {
        display: block;
      }

      &#btn-menu {
        display: none;
      }
    `};
  }
`

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
                <MenuLink>
                  <img src={require('../static/images/home-icon.svg')} alt="Página Inicial" id="btn-home" />
                  <img
                    src={require('../static/images/menu-icon.svg')}
                    alt="Menu Principal"
                    id="btn-menu"
                    onClick={this.handleToggle}
                  />
                </MenuLink>

                <NavbarItems>
                  <Link href="/">
                    <MenuLink>RED FEET</MenuLink>
                  </Link>

                  <Link href="/">
                    <MenuLink>PATROCINADORES</MenuLink>
                  </Link>

                  <Link href="/">
                    <MenuLink>TORCEDOR</MenuLink>
                  </Link>
                </NavbarItems>

                <Link href="/">
                  <Logo src={require('../static/images/red-feet-header.svg')} alt="Logotipo Red Feet" />
                </Link>

                <NavbarItems>
                  <Link href="/">
                    <MenuLink>TABELA DE JOGOS</MenuLink>
                  </Link>

                  <Link href="/">
                    <MenuLink>BLOG</MenuLink>
                  </Link>

                  <Link href="/">
                    <MenuLink>PRODUTOS OFICIAIS</MenuLink>
                  </Link>
                </NavbarItems>

                <MenuLink>
                  <img src={require('../static/images/search-icon.svg')} alt="Busca no site" />
                </MenuLink>
              </Navbar>
            </Col>
          </Row>
        </Container>

        <ModalMenu isOpen={isOpen} onClose={this.handleToggle} />
      </Nav>
    )
  }
}
