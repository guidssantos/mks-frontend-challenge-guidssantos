import { useQuery } from 'react-query'
import axios from 'axios'
import { ProductFilters } from '@/types/products'

const fetchProducts = async (filters: ProductFilters) => {
  const { data } = await axios.get(
    'http://localhost:3000/api/products',
    // {params: filters}
  )
  return data
}

const useProducts = (filters: ProductFilters) => {
  return useQuery(['products', filters], () => fetchProducts(filters), {
    staleTime: 60000
  })
}

export default useProducts
