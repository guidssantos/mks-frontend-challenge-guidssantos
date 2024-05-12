'use client'
import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { visibleCard } from '@/store/modules/cart/actions'
import { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar';
import { Icon } from '@iconify-icon/react'

export const ShoppingCart = () => {
const dispatch = useDispatch()
const cartItems = useSelector((state: any) => state.cart.items)
  const visible = useSelector((state: any) => state.cart.visible)

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
    <>
      <S.Container data-testId="shopping-cart" onClick={handleShoppingCartClick}>
        <Icon id='icon' width={20} height={20} icon="solar:cart-large-2-outline" alt='Carrinho' />
        <S.Quantity>{totalQuantity}</S.Quantity>
      </S.Container>
      <Sidebar visible={visible} />
    </>
  )
}
