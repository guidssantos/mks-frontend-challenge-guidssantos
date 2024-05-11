'use client'
import Image from 'next/image'
import * as S from './styles'
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
    <S.Container>
      <S.CardDetailsContainer>
        <Image
          src={product?.photo}
          alt={product?.name}
          width={150}
          height={150}
        />
        <S.TitleContainer>
          <S.Title>{product?.name}</S.Title>
          <S.PriceContainer>
            <S.Price>R${product?.price}</S.Price>
          </S.PriceContainer>
        </S.TitleContainer>
        <S.Description>{product?.description}</S.Description>
      </S.CardDetailsContainer>

      <S.Button onClick={handleAddToCart}>
        <Image src={ShoppingBag} alt="Shopping Bag" />
        COMPRAR
      </S.Button>
    </S.Container>
  )
}
