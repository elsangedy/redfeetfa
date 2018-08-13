import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export default styled.div`
  height: 100%;
  flex: 1;
  justify-content: space-between;
  display: none;

  ${media.lg`
    display: flex;
  `};
`
