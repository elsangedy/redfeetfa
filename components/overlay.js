import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px;
  z-index: 99999;
  background-color: ${props => props.theme.dark};
  transition: all 0.3s linear;
`
