import Link from 'next/link'

import styled from 'styled-components'

const MainMenu = styled.header`
  height: 100px;
  margin-top: -4px;
`

const MainNav = styled.nav`
  height: 50px;
  ${props => (props.black ? `background-color: ${props.theme.dark}` : '')};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainMenuLink = styled.a`
  color: ${props => props.theme.dark};
  font-size: 14px;
`

const MainLogo = styled.img`
  width: 120px;
  margin-top: -50px;
`

const MainMenuItems = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`

export default () => (
  <MainMenu>
    <MainNav black />

    <MainNav>
      <MainMenuItems>
        <Link href="/">
          <MainMenuLink>
            <img src="/static/images/home-icon.svg" alt="Menu Inicial" width="16" />
          </MainMenuLink>
        </Link>

        <Link href="/">
          <MainMenuLink>RED FEET</MainMenuLink>
        </Link>

        <Link href="/contact">
          <MainMenuLink>PATROCINADORES</MainMenuLink>
        </Link>

        <Link href="/contact">
          <MainMenuLink>TORCEDOR</MainMenuLink>
        </Link>
      </MainMenuItems>

      <div>
        <MainLogo src="/static/images/red-feet-header.svg" alt="Logotipo Red Feet" />
      </div>

      <MainMenuItems>
        <Link href="/contact">
          <MainMenuLink>TABELA DE JOGOS</MainMenuLink>
        </Link>

        <Link href="/contact">
          <MainMenuLink>BLOG</MainMenuLink>
        </Link>

        <Link href="/contact">
          <MainMenuLink>PRODUTOS OFICIAIS</MainMenuLink>
        </Link>

        <Link href="/contact">
          <MainMenuLink>
            <img src="/static/images/search-icon.svg" alt="Menu Inicial" width="16" />
          </MainMenuLink>
        </Link>
      </MainMenuItems>
    </MainNav>
  </MainMenu>
)
