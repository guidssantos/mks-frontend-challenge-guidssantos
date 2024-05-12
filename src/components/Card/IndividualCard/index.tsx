'use client'
import Image from 'next/image'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, favorite } from '@/store/modules/cart/actions'
import { toast } from 'react-toastify'
import { ProductProps } from '@/types/products'
import { formatCurrency } from '@/utils/formatCurrency'
import { Icon } from '@iconify-icon/react'


interface IndividualCardProps {
  product: ProductProps
}

export const IndividualCard = ({ product }: IndividualCardProps) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: any) => state.cart.favorites)

  const isProductInFavorites = favorites?.some(
    (favorite: any) => favorite._id === product._id
  )

  const handleAddToCart = () => {
    toast.success('Produto adicionado ao carrinho!')
    dispatch(addToCart(product))
  }

  const handleFavorite = () => {
    dispatch(favorite(product))
  }


  return (
    <S.Container>
      <S.CardDetailsContainer>
        <S.Header>
          <S.HeaderBestPrice>MELHOR PREÇO</S.HeaderBestPrice>
          <S.Favorite onClick={handleFavorite} selected={isProductInFavorites}>
            <Icon width={14} height={14} id="icon" icon="solar:heart-linear" />
          </S.Favorite>
        </S.Header>
        <Image
          src={product?.photo}
          alt={product?.name}
          width={188}
          height={188}
          style={{ objectFit: 'contain' }}
        />
        <S.TitleContainer>
          <S.Title>{product?.name}</S.Title>
        </S.TitleContainer>
        <S.PriceContainer>
          <S.PriceTitle>À vista no PIX</S.PriceTitle>
          <S.Price>{formatCurrency(product?.price * 0.85)}</S.Price>
        </S.PriceContainer>
        <S.PriceContainer>
          <S.PriceTitle>A prazo</S.PriceTitle>
          <S.SubPrice>{formatCurrency(product?.price)}</S.SubPrice>
        </S.PriceContainer>
        <S.Button data-testid="buy-button" onClick={handleAddToCart}>
          Comprar
          <Icon width={20} height={20} icon="solar:cart-large-2-outline" />
        </S.Button>
      </S.CardDetailsContainer>
    </S.Container>
  )
}
