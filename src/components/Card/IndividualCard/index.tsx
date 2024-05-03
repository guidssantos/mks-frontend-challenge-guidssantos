'use client'
import Image from 'next/image'
import * as Styled from './styles'
import AppleWatch from './images/apple-watch.svg'
import ShoppingBag from './images/shopping-bag.svg'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/modules/cart/actions'
import { toast } from 'react-toastify'
import { ProductProps } from '@/types/products'


interface IndividualCardProps {
  product: ProductProps
}

export const IndividualCard = ({ product }: IndividualCardProps) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    toast.success('Produto adicionado ao carrinho!')
    dispatch(addToCart(product))
  }
  return (
    <Styled.Container>
      <Styled.CardDetailsContainer>
        <Image
          src={product?.photo}
          alt={product?.name}
          width={150}
          height={150}
        />
        <Styled.TitleContainer>
          <Styled.Title>{product?.name}</Styled.Title>
          <Styled.PriceContainer>
            <Styled.Price>R${product?.price}</Styled.Price>
          </Styled.PriceContainer>
        </Styled.TitleContainer>
        <Styled.Description>{product?.description}</Styled.Description>
      </Styled.CardDetailsContainer>

      <Styled.Button onClick={handleAddToCart}>
        <Image src={ShoppingBag} alt="Shopping Bag" />
        COMPRAR
      </Styled.Button>
    </Styled.Container>
  )
}
