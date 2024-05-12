import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.large};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ;
    position: relative;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    #icon {
      color: #4d4dff;
    }
    &:hover {
      background-color: #eae4e4;
    }
    &:active {
      transform: scale(0.95);
    }
  `}
`

export const Quantity = styled.div`
  ${({ theme }) => css`
    color: #4d4dff;
    font-weight: 700;
    font-size: 1.2rem;
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;
    background-color: #a6bcff;
    padding: 0.4rem 0.8rem;
    border-radius: 5.7rem;
  `}
`
