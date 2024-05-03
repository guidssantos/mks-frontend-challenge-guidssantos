import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { ShoppingCart } from '@/components/ShoppingCart'

const mockStore = configureStore([])

describe('ShoppingCart Component', () => {
  test('renders shopping cart icon and quantity', () => {
    const store = mockStore({
      cart: {
        items: [
          { id: 1, amount: 2 },
          { id: 2, amount: 3 }
        ]
      }
    })

    const { getByAltText, getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ShoppingCart />
        </Provider>
      </ThemeProvider>
    )

    expect(getByAltText('Shopping Cart')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
  })

  test('dispatches action when shopping cart is clicked', () => {
    const store = mockStore({
      cart: {
        items: []
      }
    })

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ShoppingCart />
        </Provider>
      </ThemeProvider>
    )

    fireEvent.click(container.firstChild!!)

    const actions = store.getActions()
    expect(actions).toEqual([{ type: 'cart/visible', payload: true }])
  })
})
