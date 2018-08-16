import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export const CardImage = styled.div`
  flex: 1;
  width: 100%;
  height: ${props => (props.size === 'lg' ? '400px' : props.size === 'md' ? '300px' : '200px')};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ccc;
  background-position: center;
  ${props => (props.src ? `background-image: url(${props.src})` : '')};
`

export const CardBody = styled.div`
  padding: 20px;
  flex: 1;
  text-align: center;
`

export const CardTag = styled.div`
  padding: 4px 6px;
  text-align: center;
  font-weight: 800;
  color: #fff;
  background-color: ${props => props.theme[props.color || 'primary']};
  display: inline-block;
  margin: 4px;
  font-size: 12px;
  line-height: 12px;
`

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
`

export const CardSubtitle = styled.div`
  font-size: 16px;
  font-weight: 100;
  text-align: center;
  font-family: Helvetica;
`

export default styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${media.md`
    flex-direction: ${props => props.direction || 'column'};
  `};
`
