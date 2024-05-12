import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 2.6rem;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
