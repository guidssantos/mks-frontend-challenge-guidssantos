import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { toast } from 'react-toastify'
import { addToCart } from '@/store/modules/cart/actions'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { IndividualCard } from '@/components/Card/IndividualCard'

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
}))

describe('IndividualCard Component', () => {
  const mockStore = configureStore([])
  let store: any

  beforeEach(() => {
    store = mockStore({
      cart: {}
    })
  })

  test('should render component with product details', () => {
    const product = {
      _id: "1",
      name: 'Test Product',
      description: 'Test Description',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
      price: 99.99,
      brand: 'Test',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z'
    }

    const { getByText, getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <IndividualCard product={product} />
        </Provider>
      </ThemeProvider>
    )

    expect(getByText('Test Product')).toBeInTheDocument()
    expect(getByText('R$ 99,99')).toBeInTheDocument()
    expect(getByAltText('Test Product')).toBeInTheDocument()
  })

  test('should call addToCart and toast when button is clicked', () => {
    const product = {
      _id: "1",
      name: 'Test Product',
      brand: 'Test',
      description: 'Test Description',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
      price: 99.99,
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z'
    }

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <IndividualCard product={product} />
        </Provider>
      </ThemeProvider>
    )

    fireEvent.click(getByTestId('buy-button'))

    expect(toast.success).toHaveBeenCalledWith(
      'Produto adicionado ao carrinho!'
    )
    expect(store.getActions()).toEqual([addToCart(product)])
  })
})
