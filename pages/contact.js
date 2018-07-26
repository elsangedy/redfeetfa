import { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Title = styled.h1`
  color: ${props => props.theme.main};
  font-size: 50px;
`

export default class extends Component {
  // Add some delay
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
    return {}
  }

  render() {
    return (
      <Layout title="Contact">
        <Title>Red Feet FA! Contact</Title>
      </Layout>
    )
  }
}
