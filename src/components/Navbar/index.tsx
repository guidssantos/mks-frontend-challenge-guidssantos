'use client'
import { useFilters } from '@/hooks/useFilters'
import { FormInput } from '../FormInput'
import { ShoppingCart } from '../ShoppingCart'
import * as S from './styles'
import Search from './images/Search.svg'

export const Navbar = () => {
  const { filters, setFilters } = useFilters()

  return (
    <S.Container>
      <S.Logo>
        <S.LogoTitle>MKS</S.LogoTitle>
        <S.LogoSubTitle>Sistemas</S.LogoSubTitle>
      </S.Logo>
      <S.InputWrapper>
        <FormInput
          id="name"
          placeholder="Pesquisar"
          type="text"
          autoComplete="additional-name"
          Icon={Search}
          value={filters.name}
          onChange={(e) => {
            setFilters((prevFilters: any) => ({
              ...prevFilters,
              name: e.target.value
            }))
          }}
        />
      </S.InputWrapper>

      <ShoppingCart />
    </S.Container>
  )
}
