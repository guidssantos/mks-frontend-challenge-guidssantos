import styled, { css } from 'styled-components'

export const Container = styled.div`
${({theme}) => css`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${theme.colors.primary};
height: 100%;
box-shadow: ${theme.shadows.default};
position: absolute;
right: 0;
top: 0;
width: 33%;
`}
`

export const ItemContainer = styled.div`
padding: 3rem;
height: 82vh;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;
`

export const Title = styled.h1`
color: white;
font-size: 2.7rem;
font-weight: 700;
width: 200px;
`

export const OnClose = styled.div``

export const Button = styled.button`
  color: white;
  background-color: black;
  width: 100%;
  padding: 2rem;
  font-weight: 700;
  font-size: 2rem;
`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`
export const TotalContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const TotalTitle = styled.h1`
color: white;
font-weight: 700;
font-size: 2.8rem;
`

export const TotalPrice = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 2.8rem;
`
