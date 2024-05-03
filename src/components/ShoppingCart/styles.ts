import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.xsmall};
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    cursor: pointer;
    transition: all ease-in-out 300ms;
    &:hover {
      background-color: #eae4e4;
    }
    &:active{
      transform: scale(0.95);
    }
  `}
`

export const Quantity = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: 700;
    font-size: 1.8rem;
  `}
`
