import { IndividualCard } from './IndividualCard'
import * as Styled from './styles'
import { motion } from 'framer-motion'
import { ProductProps } from '@/types/products'
import useProducts from '@/hooks/useProducts'

export const Card = () => {
  const { data, isLoading, isError, refetch } = useProducts({
    page: 1,
    rows: 8,
    sortBy: 'name',
    orderBy: 'DESC'
  })

  if (isError) {
    return (
      <div>
        <p>
          Erro ao carregar os produtos. Por favor, tente novamente mais tarde.
        </p>
        <button onClick={() => refetch()}>Tentar Novamente</button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Styled.Container>
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ marginBottom: '20px', width: '217.56px', height: '316px' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px'
              }}
            ></div>
          </motion.div>
        ))}
      </Styled.Container>
    )
  }

  return (
    <Styled.Container>
      {data.products.map((product: ProductProps) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IndividualCard key={product.id} product={product} />
        </motion.div>
      ))}
    </Styled.Container>
  )
}

