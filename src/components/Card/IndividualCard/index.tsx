'use client'
import Image from 'next/image'
import * as Styled from './styles'
import AppleWatch from './images/apple-watch.svg'
import ShoppingBag from './images/shopping-bag.svg'


export const IndividualCard = ({item}: any) => {

  return (
    <Styled.Container>
      <Styled.CardDetailsContainer>
        <Image src={AppleWatch} alt="Apple watch" />
        <Styled.TitleContainer>
          <Styled.Title>Apple Watch Series 4 GPS</Styled.Title>
          <Styled.PriceContainer>
            <Styled.Price>R$399</Styled.Price>
          </Styled.PriceContainer>
        </Styled.TitleContainer>
        <Styled.Description>
          Redesigned from scratch and completely revised.
        </Styled.Description>
      </Styled.CardDetailsContainer>

      <Styled.Button>
        <Image src={ShoppingBag} alt="Shopping Bag" />
        COMPRAR
      </Styled.Button>
    </Styled.Container>
  )
}
