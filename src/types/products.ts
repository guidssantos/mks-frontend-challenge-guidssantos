export interface ProductProps{
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
  amount?: number
}

export interface ProductFilters{
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
}
