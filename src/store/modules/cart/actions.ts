import { createAction } from '@reduxjs/toolkit'

export interface AddCartPayload {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface UpdateAmountPayload {
  id: number
  amount: number
}




export const addToCart = createAction <AddCartPayload>('cart/add_product')
export const removeFromCart = createAction <number>('cart/remove_product')
export const updateAmount =
  createAction<UpdateAmountPayload>('cart/update_amount')
export const visibleCard = createAction <boolean>('cart/visible')
export const clearCart = createAction('cart/clearCart')
