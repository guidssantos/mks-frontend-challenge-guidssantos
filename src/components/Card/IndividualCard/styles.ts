import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 263.5px;
    border-radius: ${theme.border.radius.xsmall};
    background-color: ${theme.colors.white};
    justify-content: space-between;
    height: 100%;
    border: 1px solid #f0f0f0;
    padding: 1.4rem;
  `}
`

export const CardDetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    height: 100%;
    justify-content: space-around;
  `}
`
export const TitleContainer = styled.div`
display: flex;
gap: 1.6rem;
`

export const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #3d3d3d;
`

export const PriceContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
    padding: 0.3rem 0.6rem;
    border-radius: ${theme.border.radius.xsmall};
  `}
`

export const Price = styled.h2`
  font-size: 17.6px;
  font-weight: bold;
  line-height: 120%;
  text-align: right;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: #4d4dff;
`

export const SubPrice = styled.h2`
  font-size: 14.08px;
  font-weight: 500;
  line-height: 120%;
  text-align: right;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #4d4dff;
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
    width: 100%;
    justify-content: center;
    background-color: ${theme.colors.primary};
    padding: 1rem;
    color: ${theme.colors.white};
    font-weight: 600;
    border-radius:
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

    path{
      fill: #fff;
    }
  `}
`
export const PriceTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  line-height: 120%;
  text-align: right;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #4d4dff;
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const HeaderBestPrice = styled.h2`
  border-radius: 7.04px;
  opacity: 1;
  background: #09066a;
  padding: 7.04px;
  font-size: 10px;
  font-weight: 500;
  line-height: 120%;
  text-align: right;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  font-variation-settings: 'opsz' auto;
  color: #ffffff;
`

export const Favorite = styled.div<any>`
  ${({ selected }) => css`
    display: flex;
    border-radius: 8.96px;
    opacity: 1;
    background: #a6bcff;
    padding: 0.6rem;
    cursor: pointer;
    #icon  {
      color: ${selected ? '#3D3DC9' : '#fff'};
    }
  `}
`
