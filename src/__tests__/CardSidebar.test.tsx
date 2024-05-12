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
    _id: "1",
    name: 'Test Product',
    photo: 'https://example.com/test.jpg',
    price: 10.99,
    amount: 2,
    createdAt: "2024-05-12",
    updatedAt: "2024-05-12"
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
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )
    const removeButton = getByTestId('X')
    fireEvent.click(removeButton)

    expect(dispatch).toHaveBeenCalledWith(removeFromCart(item._id))
  })

  test('should call dispatch with updateAmount action when quantity control buttons are clicked', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CardSidebar item={item} />
        </Provider>
      </ThemeProvider>
    )
    const decreaseButton = getByText('-')
    const increaseButton = getByText('+')

    fireEvent.click(decreaseButton)
    expect(dispatch).toHaveBeenCalledWith(
      updateAmount({ _id: item._id, amount: item.amount - 1 })
    )

    // fireEvent.click(increaseButton)
    // expect(dispatch).toHaveBeenCalledWith(
    //   updateAmount({ _id: item._id, amount: item.amount + "1" })
    // )
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
