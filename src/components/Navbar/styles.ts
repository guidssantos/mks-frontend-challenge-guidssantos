import styled, { css } from 'styled-components'

export const Container = styled.nav`
${({theme}) => css`
background-color: ${theme.colors.primary};
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 5rem;

@media (max-width: 425px){
  padding: 2rem 2rem;
}
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

    @media (max-width: 520px){
      font-size: 3rem;
    }
  `}
`

export const LogoSubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.white};
    font-weight: 300;
    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  `}
`
