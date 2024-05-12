import { PayloadAction, createReducer } from '@reduxjs/toolkit'
import { addToCart, removeFromCart, updateAmount, visibleCard, clearCart, UpdateAmountPayload, AddCartPayload, coupon, favorite } from './actions'
import { listCoupons } from '@/utils/coupons'

const initialState = {
  items: [],
  favorites: [],
  visible: false,
  coupon: {
    isValid: undefined,
    discount: null
  }
}



export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state: any, action: PayloadAction<AddCartPayload>) => {
      const { _id } = action.payload
      const productExist = state.items.find(
        (product: any) => product._id === _id
      )

      if (productExist) {
        productExist.amount += 1
      } else {
        state.items.push({ ...action.payload, amount: 1 })
      }
    })
    .addCase(removeFromCart, (state: any, action: PayloadAction<string>) => {
      const productId = action.payload
      const productIndex = state.items.findIndex(
        (product: any) => product._id === productId
      )

      if (productIndex !== -1) {
        state.items.splice(productIndex, 1)
      }
    })
    .addCase(
      updateAmount,
      (state: any, action: PayloadAction<UpdateAmountPayload>) => {
        const { _id, amount } = action.payload
        const productExist = state.items.find(
          (product: any) => product._id === _id
        )

        if (productExist && amount >= 1) {
          productExist.amount = Number(amount)
        }
      }
    )

    .addCase(visibleCard, (state: any, action: PayloadAction<boolean>) => {
      state.visible = action.payload
    })
    .addCase(clearCart, (state) => {
      state.items = []
      state.coupon = {
        isValid: undefined,
        discount: null
      }
    })
    .addCase(coupon, (state: any, action: PayloadAction<any>) => {
      const code = action.payload

      if (listCoupons[code]) {
        state.coupon.discount = listCoupons[code]
        state.coupon.isValid = true
      } else {
        state.coupon.isValid = false
        state.coupon.discount = null
      }
    })
    .addCase(favorite, (state: any, action: PayloadAction<any>) => {
      const { _id } = action.payload
      const productExist = state.favorites.find(
        (product: any) => product._id === _id
      )
       const productIndex = state.favorites.findIndex(
         (product: any) => product._id === _id
       )

      if (productExist) {
        state.favorites.splice(productIndex, 1)
      } else {
        state.favorites.push({ ...action.payload })
      }
    })
})
