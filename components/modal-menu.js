import Link from 'next/link'

import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

import Overlay from './overlay'

const ModalMenu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};

  ${media.lg`
    display: none !important;
  `};
`

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ModalClose = styled.div`
  text-align: right;
  color: #fff;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 800;
`

const ModalLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const MenuLink = styled.a`
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  padding: 20px;
  display: block;
  text-align: center;
`

export default ({ isOpen, onClose }) => (
  <ModalMenu isOpen={isOpen}>
    <Overlay>
      <ModalBody>
        <ModalClose onClick={() => onClose()}>X</ModalClose>
        <ModalLinks>
          <Link href="/">
            <MenuLink onClick={() => onClose()}>RED FEET</MenuLink>
          </Link>

          <Link href="/">
            <MenuLink onClick={() => onClose()}>PATROCINADORES</MenuLink>
          </Link>

          <Link href="/">
            <MenuLink onClick={() => onClose()}>TORCEDOR</MenuLink>
          </Link>

          <Link href="/">
            <MenuLink onClick={() => onClose()}>TABELA DE JOGOS</MenuLink>
          </Link>

          <Link href="/">
            <MenuLink onClick={() => onClose()}>BLOG</MenuLink>
          </Link>

          <Link href="/">
            <MenuLink onClick={() => onClose()}>PRODUTOS OFICIAIS</MenuLink>
          </Link>
        </ModalLinks>
      </ModalBody>
    </Overlay>
  </ModalMenu>
)
