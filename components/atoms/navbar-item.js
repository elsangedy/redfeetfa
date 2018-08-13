import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export default styled.a`
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
`
