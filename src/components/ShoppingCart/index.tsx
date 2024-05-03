'use client'
import * as Styled from './styles'
import ShoppingCartSvg from './images/shoppingcart.svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { visibleCard } from '@/store/modules/cart/actions'
import { useEffect, useState } from 'react'

export const ShoppingCart = () => {
const dispatch = useDispatch()
const cartItems = useSelector((state: any) => state.cart.items)

const [totalQuantity, setTotalQuantity] = useState(0)

useEffect(() => {
  const newTotalQuantity = cartItems.reduce(
    (total: number, item: {amount: number}) => total + item.amount,
    0
  )
  setTotalQuantity(newTotalQuantity)
}, [cartItems])
const handleShoppingCartClick = () => {
  dispatch(visibleCard(true))
}


  return (
    <Styled.Container onClick={handleShoppingCartClick}>
      <Image src={ShoppingCartSvg} alt="Shopping Cart" />
      <Styled.Quantity>
        {totalQuantity}
      </Styled.Quantity>
    </Styled.Container>
  )
}
