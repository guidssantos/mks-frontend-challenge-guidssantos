'use client'
import { ShoppingCart } from '../ShoppingCart'
import * as S from './styles'

export const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>
        <S.LogoTitle>
          MKS
        </S.LogoTitle>
        <S.LogoSubTitle>
          Sistemas
        </S.LogoSubTitle>
      </S.Logo>

      <ShoppingCart/>
    </S.Container>
  )
}
