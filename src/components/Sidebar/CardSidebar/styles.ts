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
cursor: pointer;
`


export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  width: 100px;
`

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.6rem;
`

export const QuantityTitle = styled.h1`
  font-weight: 400;
 font-size : 0.8rem;
 margin: 0;
 padding: 0;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
`

export const QuantityControl = styled.div`
  padding: 0 0.8rem;
  margin: 0.6rem 1px;
  color: black;
  cursor: pointer;
`

export const Price = styled.span`
font-size: 1.4rem;
font-weight: 700;
`
