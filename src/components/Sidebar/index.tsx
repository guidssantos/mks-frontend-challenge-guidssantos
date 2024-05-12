import { useDispatch, useSelector } from 'react-redux'
import { CardSidebar } from './CardSidebar'
import * as S from './styles'
import { visibleCard, clearCart, coupon } from '@/store/modules/cart/actions'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { ProductProps } from '@/types/products'
import { useEffect, useState } from 'react'
import { FormInput } from '../FormInput'
import { Icon } from '@iconify-icon/react'

export const Sidebar = ({ visible }: { visible?: boolean }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: any) => state.cart.items)
  const state = useSelector((state: any) => state.cart)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleShoppingCartClick = () => {
    if (visible) {
      dispatch(visibleCard(false))
    }
  }

  const handleFinalizarCompraClick = () => {
    if (totalPrice === 0) return
    toast.success('Compra realizada com sucesso!')
    dispatch(visibleCard(false))
    dispatch(clearCart())
  }



  const couponValidate = (code: any) => {
    dispatch(coupon(code))
  }

   useEffect(() => {
     let calculatedPrice = cartItems.reduce(
       (total: number, item: { price: number; amount: number }) =>
         total + item.price * item.amount,
       0
     )

     if (state.coupon?.isValid) {
      toast.success("Cupom aplicado!")
      calculatedPrice = calculatedPrice * (1 - state.coupon.discount)
     }

     setTotalPrice(calculatedPrice)
   }, [cartItems, state.coupon])

  return (
    <S.Container
      style={{
        visibility: visible ? 'visible' : 'hidden'
      }}
    >
      <S.ItemContainer>
        <S.Header>
          <S.Title>Carrinho</S.Title>
          <S.OnClose data-testId="close" onClick={handleShoppingCartClick}>
            <Icon width={28} height={28} icon="solar:close-circle-outline" alt='Fechar' />
          </S.OnClose>
        </S.Header>
        {cartItems.length > 0 ? (
          <>
            <S.ContentContainer>
              <S.CardContainer>
                {cartItems.map((item: ProductProps) => (
                  <CardSidebar key={item._id} item={item} />
                ))}
              </S.CardContainer>
              <FormInput
                id="coupon"
                placeholder="Insira o cupom de desconto"
                type="text"
                Icon={() => <Icon id='icon' icon="solar:ticket-outline" alt='Cupom' />}
                onChange={(e) => {
                  couponValidate(e.target.value)
                }}
              />
              <S.TotalContainer>
                <S.TotalTitle>Total:</S.TotalTitle>
                <S.TotalPrice>R$: {totalPrice.toFixed(2)}</S.TotalPrice>
              </S.TotalContainer>
            </S.ContentContainer>

            <S.Button onClick={handleFinalizarCompraClick}>Comprar</S.Button>
          </>
        ) : (
          <S.ContentContainer>
            <p>Carrinho vazio adicione algum item </p>
          </S.ContentContainer>
        )}
      </S.ItemContainer>
    </S.Container>
  )
}
