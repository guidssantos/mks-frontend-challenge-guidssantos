import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCategories = async () => {
  const { data } = await axios.get(
    '/api/categories'
  )
  return data
}

const useCategories = () => {
  return useQuery('categories', () => fetchCategories(), {
    staleTime: 60000
  })
}

export default useCategories
