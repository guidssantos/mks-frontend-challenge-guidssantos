'use client'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Logo>
          <S.LogoTitle>MKS</S.LogoTitle>
          <S.LogoSubTitle>Sistemas</S.LogoSubTitle>
        </S.Logo>
        <S.RightContainer>
          <S.TextContainer>
            <S.Title>Contato</S.Title>
            <S.SubTitle>+11 4008-0098</S.SubTitle>
            <S.SubTitle>teste@teste.com</S.SubTitle>
          </S.TextContainer>
          <S.TextContainer>
            <S.Title>Endereço</S.Title>
            <S.SubTitle>Rua São Sebastião, CEP: 29000-00</S.SubTitle>
            <S.SubTitle>Sumaré, SP</S.SubTitle>
          </S.TextContainer>
        </S.RightContainer>
      </S.Container>
    </S.Background>
  )
}
