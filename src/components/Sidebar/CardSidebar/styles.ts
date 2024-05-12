import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: relative;
  gap: 1.6rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  padding: 0.8rem;
`

export const OnClose = styled.div`
  position: absolute;
  right: 0;
  top: 0.2rem;
  color: #4d4dff;

  cursor: pointer;
`


export const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: #3d3d3d;
  width: 100%;
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

  span{
    cursor:  default;
  }
`

export const QuantityControl = styled.div`
  padding: 0 0.8rem;
  margin: 0.6rem 1px;
  color: black;
  cursor: pointer;
`

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: #4d4dff;
`
export const BottomContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const ItensContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 1rem;
`
