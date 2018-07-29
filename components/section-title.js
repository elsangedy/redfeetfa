import styled from 'styled-components'

export default styled.div`
  font-size: 16px;
  font-weight: 800;
  margin: 0 auto;
  padding: 10px 30px;
  display: inline-block;
  border: 3px solid ${props => props.theme.primary};
`
