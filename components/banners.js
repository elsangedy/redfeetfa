import { Component, Children, cloneElement } from 'react'

import styled from 'styled-components'

const Banner = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
  position: relative;
`

const BannerArrow = styled.div`
  font-size: 20px;
  color: #fff;
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  top: 240px;
  cursor: pointer;
  ${props => (props.left ? 'left' : 'right')}: 10%;
  text-shadow: 1px 1px 1px #000;
`

export const BannerItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme[props.color]};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: ${props => (props.isShow ? 'block' : 'none')};
  ${props => (props.src ? `background-image: url(${props.src})` : '')};
`

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      total: 0
    }

    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    const total = Children.count(this.props.children)

    this.setState({
      current: 0,
      total: total > 0 ? total - 1 : 0
    })
  }

  componentWillReceiveProps(next) {
    const total = Children.count(next.children)

    if (this.state.total !== total) {
      this.setState({
        current: 0,
        total: total > 0 ? total - 1 : 0
      })
    }
  }

  handlePrev() {
    this.setState(({ total, current }) => ({
      total,
      current: current > 0 ? current - 1 : total
    }))
  }

  handleNext() {
    this.setState(({ total, current }) => ({
      total,
      current: current < total ? current + 1 : 0
    }))
  }

  render() {
    const { children } = this.props
    const { current } = this.state

    return (
      <Banner>
        <BannerArrow left onClick={this.handlePrev}>
          {'<'}
        </BannerArrow>
        <BannerArrow right onClick={this.handleNext}>
          {'>'}
        </BannerArrow>

        {Children.map(children, (child, i) => cloneElement(child, { isShow: current === i }))}
      </Banner>
    )
  }
}
