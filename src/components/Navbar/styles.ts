import styled, { css } from 'styled-components'

export const Container = styled.nav`
${({theme}) => css`
background-color: ${theme.colors.primary};
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 5rem
`}
`

export const Logo = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

export const LogoTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    color: ${theme.colors.white};
    font-weight: 600;
  `}
`

export const LogoSubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.white};
    font-weight: 300;
  `}
`
