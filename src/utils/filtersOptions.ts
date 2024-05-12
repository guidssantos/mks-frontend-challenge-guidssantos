export interface FiltersProps {
  value: string,
  label: string
}
export interface CategoryProps {
  _id: string,
  name: string
}

export const orderByOptions = [
    {
        value: 'name',
        label: 'Nome'
    },
    {
        value: 'price',
        label: 'Preço'
    },
    {
        value: 'createdAt',
        label: 'Data de criação'
    }
]

export const limitOptions = [
    {
        value:  8,
        label: '8 por página'
    },
    {
        value:  16,
        label: '16 por página'
    },
    {
        value:  24,
        label: '24 por página'
    },
    {
        value:  32,
        label: '32 por página'
    },
]
