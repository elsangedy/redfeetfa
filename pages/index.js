import styled from 'styled-components'

import Layout from '../components/layout'
import MainMenu from '../components/main-menu'
import HeaderVideo from '../components/header-video'

const Title = styled.h1`
  color: ${props => props.theme.main};
  font-size: 50px;
`

export default () => (
  <Layout>
    <HeaderVideo />

    <MainMenu />

    <Title>Red Feet FA!</Title>
  </Layout>
)
