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
  categories: [],
    orderBy: string,
  limit: number,
  startDate: 0,
  endDate: 0,
}
