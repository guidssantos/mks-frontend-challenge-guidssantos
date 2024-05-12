import  React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { toast } from 'react-toastify'
import { removeFromCart, updateAmount } from '@/store/modules/cart/actions'
import { ProductProps } from '@/types/products'
import { Icon } from '@iconify-icon/react'

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
    dispatch(removeFromCart(item._id))
  }

  const handleUpdateAmount = (newAmount: number) => {
    if (newAmount >= 1) {
      dispatch(updateAmount({ _id: item._id, amount: newAmount }))
      setQuantity(newAmount)
    } else {
      setQuantity(1)
    }
  }

  const totalPrice = item.price * quantity

  return (
    <S.Container>
      <S.OnClose onClick={handleRemoveFromCart}>
        <Icon
          data-testid="X"
          width={20}
          height={20}
          icon="solar:close-circle-outline"
        />
      </S.OnClose>
      <Image
        src={item.photo}
        alt={item.name}
        width={53}
        height={53}
        style={{
          objectFit: 'contain'
        }}
      />
      <S.ItensContainer>
        <S.Title>{item.name}</S.Title>
        <S.BottomContainer>
          <S.QuantityContainer>
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
          <S.Price>R$: {totalPrice.toFixed(2)}</S.Price>
        </S.BottomContainer>
      </S.ItensContainer>
    </S.Container>
  )
}
