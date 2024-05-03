import { PayloadAction, createReducer } from '@reduxjs/toolkit'
import { addToCart, removeFromCart, updateAmount, visibleCard, clearCart, UpdateAmountPayload, AddCartPayload } from './actions'

const initialState = {
  items: [],
  visible: false
}

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state: any, action: PayloadAction<AddCartPayload>) => {
      const { id } = action.payload
      const productExist = state.items.find((product: any) => product.id === id)

      if (productExist) {
        productExist.amount += 1
      } else {
        state.items.push({ ...action.payload, amount: 1 })
      }
    })
    .addCase(
      removeFromCart,
      (state: any, action: PayloadAction<number>) => {
        const productId = action.payload
        const productIndex = state.items.findIndex(
          (product: any) => product.id === productId
        )

        if (productIndex !== -1) {
          state.items.splice(productIndex, 1)
        }
      }
    )
    .addCase(
      updateAmount,
      (state: any, action: PayloadAction<UpdateAmountPayload>) => {
        const { id, amount } = action.payload
        const productExist = state.items.find(
          (product: any) => product.id === id
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
    })
})
