import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { Sidebar } from '@/components/Sidebar'

const mockStore = configureStore([])

describe('Sidebar Component', () => {
  test('renders sidebar with cart items and total price', () => {
    const store = mockStore({
      cart: {
        items: [
          { id: 1, name: 'Item 1', price: 10.99, amount: 2 },
          { id: 2, name: 'Item 2', price: 5.99, amount: 3 }
        ]
      }
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Sidebar visible={true} />
        </Provider>
      </ThemeProvider>
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByText('Total:')).toBeInTheDocument()
    expect(getByText('R$: 39.95')).toBeInTheDocument()
  })

  test('dispatches action when shopping cart is closed', () => {
    const store = mockStore({
      cart: {
        items: []
      }
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Sidebar visible={true} />
        </Provider>
      </ThemeProvider>
    )

    fireEvent.click(getByText('X'))

    const actions = store.getActions()
    expect(actions).toEqual([{ type: 'cart/visible', payload: false }])
  })

  test('dispatches actions when purchase is completed', () => {
    const store = mockStore({
      cart: {
        items: []
      }
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Sidebar visible={true} />
        </Provider>
      </ThemeProvider>
    )

    fireEvent.click(getByText('Finalizar Compra'))

    const actions = store.getActions()
    expect(actions).toEqual([
      { type: 'cart/visible', payload: false },
      { type: 'cart/clearCart' }
    ])
  })
})
