'use client'
import * as Styled from './styles'
import ShoppingCartSvg from './images/shoppingcart.svg'
import Image from 'next/image'

export const ShoppingCart = () => {
  return (
    <Styled.Container>
      <Image src={ShoppingCartSvg} alt="Shopping Cart" />
      <Styled.Quantity>
        0
      </Styled.Quantity>
    </Styled.Container>
  )
}
