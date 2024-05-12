import styled, { css } from 'styled-components'

export const Background = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.footer};
    display: flex;
    padding: 2.4rem 0;
  `}
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 425px){
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LogoTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    color: ${theme.colors.primary};
    font-weight: 600;

    @media (max-width: 520px) {
      font-size: 3rem;
    }
  `}
`

export const LogoSubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.primary};
    font-weight: 300;
    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  `}
`
export const RightContainer = styled.div`
display: flex;
gap: 2rem;
align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #4d4dff;
`

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #4d4dff;
`
