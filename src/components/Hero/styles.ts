import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  img {
    width: 457px;
    height: 283px;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const RightContainer = styled.div`
  transform: scaleX(-1);
  img {
    width: 434px;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  font-variation-settings: 'opsz' auto;
  width: 300px;

  strong {
    font-weight: 700;
    font-size: 24px;
    font-variation-settings: 'opsz' auto;
    color: #09066a;
  }
`
