import { CardSidebar } from './CardSidebar'
import * as Styled from './styles'

export const Sidebar = ({ visible  }: { visible?: boolean }) =>
  visible ? (
    <Styled.Container>
      <Styled.ItemContainer>
        <Styled.Header>
          <Styled.Title>Carrinho de compras</Styled.Title>
          <Styled.OnClose>X</Styled.OnClose>
        </Styled.Header>
        <Styled.ContentContainer>
          <CardSidebar />
          <Styled.TotalContainer>
            <Styled.TotalTitle>Total:</Styled.TotalTitle>
            <Styled.TotalPrice>R$: 798</Styled.TotalPrice>
          </Styled.TotalContainer>
        </Styled.ContentContainer>
      </Styled.ItemContainer>
      <Styled.Button>Finalizar Compra</Styled.Button>
    </Styled.Container>
  ) : null
