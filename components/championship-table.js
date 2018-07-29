import styled from 'styled-components'
import { Container } from 'styled-bootstrap-grid'

import Button from './button'

const Championship = styled.div`
  margin: 70px 0 20px;
`

const Header = styled.div`
  border-top: 1px solid #ddd;
  text-align: center;
  display: block;
`

const HeaderImage = styled.img`
  margin-top: -40px;
  height: 80px;
`

const HeaderTitle = styled.div`
  color: ${props => props.theme.green};
  font-size: 18px;
  font-weight: 800;
  margin-top: 10px;
`

const Table = styled.table`
  margin: 15px 0;
  width: 100%;
  font-family: Helvetica;
`

const TableRow = styled.tr`
  font-size: ${props => (props.big ? '18px' : '16px')};
  font-weight: 800;

  td {
    padding: 5px 0;
  }
`

const TableScore = styled.td`
  text-align: center;
`

const TableWin = styled.th`
  font-size: 18px;
  font-weight: 800;
  color: ${props => props.theme.green};
`

const TableLoss = styled.th`
  font-size: 18px;
  font-weight: 800;
  color: ${props => props.theme.primary};
`

export default () => (
  <Championship>
    <Header>
      <HeaderImage src={require('../static/images/fpfa-logo.svg')} alt="Campeonato Paranaence" />
      <HeaderTitle>TABELA</HeaderTitle>
    </Header>

    <Container>
      <Table>
        <thead>
          <tr>
            <th colSpan="2" />
            <TableWin>V</TableWin>
            <TableLoss>D</TableLoss>
          </tr>
        </thead>
        <tbody>
          <TableRow big>
            <td>1</td>
            <td>RED FEET</td>
            <TableScore>3</TableScore>
            <TableScore>0</TableScore>
          </TableRow>
          <TableRow>
            <td>2</td>
            <td>FALCONS</td>
            <TableScore>2</TableScore>
            <TableScore>1</TableScore>
          </TableRow>
          <TableRow>
            <td>3</td>
            <td>PATRIOTS</td>
            <TableScore>1</TableScore>
            <TableScore>2</TableScore>
          </TableRow>
          <TableRow>
            <td>4</td>
            <td>INDIANS</td>
            <TableScore>0</TableScore>
            <TableScore>3</TableScore>
          </TableRow>
        </tbody>
      </Table>

      <Button color="green">TABELA COMPLETA</Button>
    </Container>
  </Championship>
)
