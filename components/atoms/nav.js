import styled from 'styled-components'

export default styled.nav`
  height: 50px;
  background-color: ${props => props.theme.background};
  box-shadow: 0px -1px 10px #333;

  [data-name='container'],
  [data-name='row'],
  [data-name='col'] {
    height: 100%;
  }
`
