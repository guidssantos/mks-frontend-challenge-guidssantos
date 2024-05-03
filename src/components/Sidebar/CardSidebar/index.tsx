import  React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import * as Styled from './styles'
import { toast } from 'react-toastify'
import { removeFromCart, updateAmount } from '@/store/modules/cart/actions'
import { ProductProps } from '@/types/products'

interface CardSidebarProps {
  item: ProductProps
}

export const CardSidebar = ({ item }: CardSidebarProps) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(item.amount ? item.amount : 0)

  useEffect(() => {
    if (item.amount) setQuantity(item.amount)
  }, [item.amount])

  const handleRemoveFromCart = () => {
    toast.success('Produto removido com sucesso!')
    dispatch(removeFromCart(item.id))
  }

  const handleUpdateAmount = (newAmount: number) => {
    if (newAmount > 1) {
      dispatch(updateAmount({ id: item.id, amount: newAmount }))
      setQuantity(newAmount)
    } else {
      return
    }
  }

  const totalPrice = item.price * quantity

  return (
    <Styled.Container>
      <Styled.OnClose onClick={handleRemoveFromCart}>X</Styled.OnClose>
      <Image src={item.photo} alt={item.name} width={46} height={46} />
      <Styled.Title>{item.name}</Styled.Title>
      <Styled.QuantityContainer>
        <Styled.QuantityTitle>Qtd:</Styled.QuantityTitle>
        <Styled.Quantity>
          <Styled.QuantityControl
            style={{
              borderRight: '0.2px solid #bfbfbf'
            }}
            onClick={() => handleUpdateAmount(quantity - 1)}
          >
            -
          </Styled.QuantityControl>
          <span>{quantity}</span>
          <Styled.QuantityControl
            style={{
              borderLeft: '0.2px solid #bfbfbf'
            }}
            onClick={() => handleUpdateAmount(quantity + 1)}
          >
            +
          </Styled.QuantityControl>
        </Styled.Quantity>
      </Styled.QuantityContainer>
      <Styled.Price>R$: {totalPrice.toFixed(2)}</Styled.Price>{' '}
    </Styled.Container>
  )
}
