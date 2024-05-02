'use client'
import { ShoppingCart } from '../ShoppingCart'
import * as Styled from './styles'

export const Navbar = () => {
  return (
    <Styled.Container>
      <Styled.Logo>
        <Styled.LogoTitle>
          MKS
        </Styled.LogoTitle>
        <Styled.LogoSubTitle>
          Sistemas
        </Styled.LogoSubTitle>
      </Styled.Logo>

      <ShoppingCart/>
    </Styled.Container>
  )
}
