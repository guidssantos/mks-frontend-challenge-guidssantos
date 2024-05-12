import styled, { css } from 'styled-components'


export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background: linear-gradient(
      190deg,
      rgba(77, 77, 255, 0.6) -3%,
      rgba(129, 129, 255, 0.425) 10%,
      rgba(255, 255, 255, 0) 69%
    );
  `}
`
export const ContentContainer = styled.section`
display: flex;
flex-direction: column;
margin: 0 auto;
padding-bottom: 5rem;
gap: 1rem;
width: min-content;

`
