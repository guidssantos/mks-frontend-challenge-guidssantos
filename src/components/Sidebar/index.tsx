import { useDispatch, useSelector } from 'react-redux'
import { CardSidebar } from './CardSidebar'
import * as Styled from './styles'
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
      <Styled.Container>
        <Styled.ItemContainer>
          <Styled.Header>
            <Styled.Title>Carrinho de compras</Styled.Title>
            <Styled.OnClose onClick={handleShoppingCartClick}>X</Styled.OnClose>
          </Styled.Header>
          <Styled.ContentContainer>
            <Styled.CardContainer>
              {cartItems.map((item: ProductProps) => (
                <CardSidebar key={item.id} item={item} />
              ))}
            </Styled.CardContainer>
            <Styled.TotalContainer>
              <Styled.TotalTitle>Total:</Styled.TotalTitle>
              <Styled.TotalPrice>R$: {totalPrice.toFixed(2)}</Styled.TotalPrice>
            </Styled.TotalContainer>
          </Styled.ContentContainer>
        </Styled.ItemContainer>
        <Styled.Button onClick={handleFinalizarCompraClick}>
          Finalizar Compra
        </Styled.Button>{' '}
      </Styled.Container>
    </motion.div>
  )
}
