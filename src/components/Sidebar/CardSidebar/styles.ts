import styled, { css } from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
padding: 2rem;
border-radius: 0.8rem;
position: relative;
`

export const OnClose = styled.div`
position: absolute;
right: -10px;
top: -10px;
background-color: black;
color: white;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 20px;
border-radius: 1rem;
`


export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
`

export const Quantity = styled.div``

export const Price = styled.span`
font-size: 1.4rem;
font-weight: 700;
`
