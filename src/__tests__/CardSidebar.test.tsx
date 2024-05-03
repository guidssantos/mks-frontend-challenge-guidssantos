import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import { Provider } from 'react-redux'
import { removeFromCart, updateAmount } from '@/store/modules/cart/actions'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import configureStore from 'redux-mock-store'
import { CardSidebar } from '@/components/Sidebar/CardSidebar'

const mockStore = configureStore([])

describe('CardSidebar Component', () => {
  let store: any
  let dispatch: jest.Mock

  beforeEach(() => {
    store = mockStore({
      cart: {}
    })
    dispatch = jest.fn()
    store.dispatch = dispatch
  })

  const item = {
    id: 1,
    name: 'Test Product',
    description:'Test description',
    photo: 'https://example.com/test.jpg',
    price: 10.99,
    amount: 2,
    brand: 'Test',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  }

  test('should render component with correct details', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )

    expect(getByText(item.name)).toBeInTheDocument()
    expect(getByText(`${item.amount}`)).toBeInTheDocument()
    expect(
      getByText(`R$: ${(item.price * item.amount).toFixed(2)}`)
    ).toBeInTheDocument()
  })

  test('should call dispatch with removeFromCart action when remove button is clicked', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )
    const removeButton = getByText('X')
    fireEvent.click(removeButton)

    expect(dispatch).toHaveBeenCalledWith(removeFromCart( item.id ))
  })

  test('should call dispatch with updateAmount action when quantity control buttons are clicked', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )
    const increaseButton = getByText('+')



    fireEvent.click(increaseButton)
    expect(dispatch).toHaveBeenCalledWith(
      updateAmount({ id: item.id, amount: item.amount + 1 })
    )
  })

  test('should not allow quantity to go below 1', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )
    const decreaseButton = getByText('-')

    fireEvent.click(decreaseButton)
    expect(dispatch).not.toHaveBeenCalled()
  })

  test('should update quantity state when item amount prop changes', () => {
    const newItem = { ...item, amount: 3 }
    const { getByText, rerender } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )

    rerender(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={newItem} />
        </Provider>
      </ThemeProvider>
    )

    expect(() => getByText(`${newItem.amount}`)).not.toThrow()
  })

  test('should update total price when item amount prop changes', () => {
    const newItem = { ...item, amount: 3 }
    const { getByText, rerender } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )

    rerender(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={newItem} />
        </Provider>
      </ThemeProvider>
    )

    expect(
      getByText(`R$: ${(newItem.price * newItem.amount).toFixed(2)}`)
    ).toBeInTheDocument()
  })
})
