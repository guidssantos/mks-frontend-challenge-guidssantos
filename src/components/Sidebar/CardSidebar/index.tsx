'use client'
import Image from 'next/image'
import * as Styled from './styles'
import AppleWatch from '../../Card/IndividualCard/images/apple-watch.svg'


export const CardSidebar = () => {
  return (
    <Styled.Container>
      <Styled.OnClose>
        X
      </Styled.OnClose>
      <Image src={AppleWatch} alt="Apple watch" width={46} height={46} />
      <Styled.Title>Apple Watch Series 4 GPS</Styled.Title>
      <Styled.Quantity>
        0
      </Styled.Quantity>
      <Styled.Price>
        R$:399
      </Styled.Price>
    </Styled.Container>
  )
}
