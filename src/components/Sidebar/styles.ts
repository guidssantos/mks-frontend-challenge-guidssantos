import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    border-radius: 24px;
    position: absolute;
    right: 2rem;
    top: 7rem;
    transition: transform 0.3s ease;
    z-index: 999;

    &.show {
      right: 0;
    }

    &.hide {
      right: -100%;
    }

    @media (max-width: 425px){
      top: 11.6rem;
    }

    @media (max-width: 425px){
      top: 17rem;
      right: 1.3rem;
    }

  `}
`

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
`

export const ItemContainer = styled.div`
padding: 0.8rem;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #3d3d3d;
`

export const OnClose = styled.div`
  color: #4d4dff;
  cursor: pointer;

    svg{
      width: 28px;
      height: 100%;
    }
`

export const Button = styled.button`
  color: white;
  width: 100%;
  padding: 2rem;
  font-weight: 500;
  font-size: 1.8rem;
  border-radius: 16px;
  background: #4d4dff;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    color: #3d3d3d;
    margin-bottom: 5rem;
  }

  #coupon {
    margin: 1.6rem 0;
    border: 1px solid #f0f0f0;

    input::placeholder,
    input, g {
      color: #4d4dff;
    }

  }
`
export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:  1.6rem 0;

  h1 {
    color: #4d4dff;
  }
`

export const TotalTitle = styled.h1`
font-weight: 700;
font-size: 2.4rem;
`

export const TotalPrice = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
`
