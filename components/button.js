import styled from 'styled-components'

export default styled.button`
  color: #fff;
  background-color: ${props => props.theme[props.color || 'primary']};
  font-size: 16px;
  font-weight: 800px;
  padding: 8px 20px;
  text-align: center;
  margin: 0 auto;
  display: block;
`
