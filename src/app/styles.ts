import styled, { css } from 'styled-components'


export const Container = styled.main`
${({theme}) => css`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`}
`
