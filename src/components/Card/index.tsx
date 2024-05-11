import { IndividualCard } from './IndividualCard'
import * as S from './styles'
import { motion } from 'framer-motion'
import { ProductFilters, ProductProps } from '@/types/products'
import useProducts from '@/hooks/useProducts'

export const Card = ({filters}: any) => {
  const { data, isLoading, isError, refetch } = useProducts({
    ...filters
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
      <S.Container>
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
      </S.Container>
    )
  }

  return (
    <S.Container>
      
      {data.map((product: ProductProps) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IndividualCard key={product.id} product={product} />
        </motion.div>
      ))}
    </S.Container>
  )
}

