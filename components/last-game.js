import { Fragment } from 'react'
import styled from 'styled-components'

import { Container, Row, Col } from 'styled-bootstrap-grid'

const Header = styled.header`
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${props => props.theme[props.color || 'blue']};
  font-weight: 800;
  padding: 30px;
  text-align: center;
  text-shadow: 1px 1px 1px ${props => props.theme.dark};
  z-index: 1;

  ${props =>
    props.src
      ? `
        &::after {
          content: "";
          opacity: 0.4;
          top: 10px;
          left: 0;
          right: 0;
          bottom: 10px;
          position: absolute;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          background-image: url(${props.src});
          z-index: -1;
        }
      `
      : ''};
`

const TeamLogo = styled.img`
  width: 80%;
  margin: 20px auto;
  display: block;
`

const TeamName = styled.div`
  font-family: Helvetica;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
`

const TeamScore = styled.div`
  font-size: 70px;
  font-weight: 800;
  text-align: center;
`

const Vs = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
`

export default () => (
  <Fragment>
    <Header src={require('../static/images/fpfa-logo.svg')}>CAMPEONATO PARANAENSE 2018</Header>
    <Container>
      <Row>
        <Col col="5">
          <TeamLogo src={require('../static/images/red-feet-symbol.svg')} alt="Red Feet" />
        </Col>
        <Col col="2" />
        <Col col="5">
          <TeamLogo src={require('../static/images/red-feet-symbol.svg')} alt="Red Skins" />
        </Col>
      </Row>
      <Row alignItems="center">
        <Col col="5">
          <TeamName>RED FEET</TeamName>
          <TeamScore>12</TeamScore>
        </Col>
        <Col col="2">
          <Vs>VS</Vs>
        </Col>
        <Col col="5">
          <TeamName>RED SKINS</TeamName>
          <TeamScore>08</TeamScore>
        </Col>
      </Row>
    </Container>
  </Fragment>
)
