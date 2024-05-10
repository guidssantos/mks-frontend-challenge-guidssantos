import { useQuery } from 'react-query'
import axios from 'axios'
import { ProductFilters } from '@/types/products'

const fetchProducts = async (filters: ProductFilters) => {
  const { data } = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
    {params: filters}
  )
  return data
}

const useProducts = (filters: ProductFilters) => {
  return useQuery(['products', filters], () => fetchProducts(filters), {
    staleTime: 60000
  })
}

export default useProducts
