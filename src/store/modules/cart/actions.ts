import { createAction } from '@reduxjs/toolkit'

export interface AddCartPayload {
  _id: string
  name: string
  brand?: string
  description?: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface UpdateAmountPayload {
  _id: string
  amount: number
}




export const addToCart = createAction <AddCartPayload>('cart/add_product')
export const favorite = createAction <any>('cart/favorite')
export const removeFromCart = createAction <string>('cart/remove_product')
export const updateAmount =
  createAction<UpdateAmountPayload>('cart/update_amount')
export const visibleCard = createAction <boolean>('cart/visible')
export const clearCart = createAction('cart/clearCart')
export const coupon = createAction<string>('cart/coupon')
