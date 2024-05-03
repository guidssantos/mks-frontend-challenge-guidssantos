import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${theme.shadows.default};
    width: 217.56px;
    gap: 1rem;
    border-radius: ${theme.border.radius.xsmall};
    justify-content: space-between;
    height: 100%;
  `}
`

export const CardDetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    gap: 1rem;

  `}
`
export const TitleContainer = styled.div`
display: flex;
gap: 1.6rem;
`

export const Title = styled.h1`
  line-break: auto;
  font-weight: 400;
  font-size: 1.6rem;
`

export const PriceContainer = styled.div`
  ${({ theme }) => css`
    height: fit-content;
    background-color: ${theme.colors.secondary};
    padding: 0.3rem 0.6rem;
    border-radius: ${theme.border.radius.xsmall};
  `}
`

export const Price = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`

export const Description = styled.span`
  font-weight: 300;
  font-size: 1rem;
  font-weight: 300;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    justify-content: center;
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 1rem;
    color: ${theme.colors.white};
    font-weight: 600;
    border-radius: 0 0 ${theme.border.radius.xsmall}
      ${theme.border.radius.xsmall};
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #093b88;
    }

    &:active{
      font-size: 1.2rem;
      img{
        width: 13px;
        height: 100%;
      }
    }
  `}
`
