import { useDispatch, useSelector } from 'react-redux'
import { CardSidebar } from './CardSidebar'
import * as S from './styles'
import { visibleCard, clearCart } from '@/store/modules/cart/actions'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { ProductProps } from '@/types/products'

export const Sidebar = ({ visible }: { visible?: boolean }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: any) => state.cart.items)

  const handleShoppingCartClick = () => {
    if (visible) {
      dispatch(visibleCard(false))
    }
  }

  const handleFinalizarCompraClick = () => {
    toast.success('Compra realizada com sucesso!')
    dispatch(visibleCard(false))
    dispatch(clearCart())
  }

  const totalPrice = cartItems.reduce(
    (total: number, item: {price: number; amount: number}) => total + item.price * item.amount,
    0
  )

  return (
    <motion.div
      animate={{
        x: visible ? 0 : '-1%',
        opacity: visible ? 1 : 0
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        visibility: visible ? 'visible' : 'hidden'
      }}
    >
      <S.Container>
        <S.ItemContainer>
          <S.Header>
            <S.Title>Carrinho de compras</S.Title>
            <S.OnClose onClick={handleShoppingCartClick}>X</S.OnClose>
          </S.Header>
          <S.ContentContainer>
            <S.CardContainer>
              {cartItems.map((item: ProductProps) => (
                <CardSidebar key={item.id} item={item} />
              ))}
            </S.CardContainer>
            <S.TotalContainer>
              <S.TotalTitle>Total:</S.TotalTitle>
              <S.TotalPrice>R$: {totalPrice.toFixed(2)}</S.TotalPrice>
            </S.TotalContainer>
          </S.ContentContainer>
        </S.ItemContainer>
        <S.Button onClick={handleFinalizarCompraClick}>
          Finalizar Compra
        </S.Button>{' '}
      </S.Container>
    </motion.div>
  )
}
