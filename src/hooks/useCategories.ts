import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCategories = async () => {
  const { data } = await axios.get(
    'http://localhost:3000/api/categories'
  )
  return data
}

const useCategories = () => {
  return useQuery(['categories'], () => fetchCategories(), {
    staleTime: 60000
  })
}

export default useCategories
