import  React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import * as S from './styles'
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
      setQuantity(1)
    }
  }

  const totalPrice = item.price * quantity

  return (
    <S.Container>
      <S.OnClose onClick={handleRemoveFromCart}>X</S.OnClose>
      <Image src={item.photo} alt={item.name} width={46} height={46} />
      <S.Title>{item.name}</S.Title>
      <S.QuantityContainer>
        <S.QuantityTitle>Qtd:</S.QuantityTitle>
        <S.Quantity>
          <S.QuantityControl
            style={{
              borderRight: '0.2px solid #bfbfbf'
            }}
            onClick={() => handleUpdateAmount(quantity - 1)}
          >
            -
          </S.QuantityControl>
          <span>{quantity}</span>
          <S.QuantityControl
            style={{
              borderLeft: '0.2px solid #bfbfbf'
            }}
            onClick={() => handleUpdateAmount(quantity + 1)}
          >
            +
          </S.QuantityControl>
        </S.Quantity>
      </S.QuantityContainer>
      <S.Price>R$: {totalPrice.toFixed(2)}</S.Price>{' '}
    </S.Container>
  )
}
