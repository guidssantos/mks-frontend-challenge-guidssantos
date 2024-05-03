import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './modules/cart/rootReducer'


export const store = configureStore({ reducer: rootReducer })
