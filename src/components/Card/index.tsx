import useProducts from '@/hooks/useProducts'
import { IndividualCard } from './IndividualCard'
import * as Styled from './styles'
import { motion, useCycle } from 'framer-motion'
import { ProductProps } from '@/types/products'

export const Card = () => {
  const { data, isLoading, isError } = useProducts({
    page: 1,
    rows: 8,
    sortBy: 'name',
    orderBy: 'DESC'
  })

  const [opacityCycle, cycleOpacity] = useCycle(1, 0.5)

  if(isError){
    console.log('error', isError)
  }

  if (isLoading) {
    return (
      <Styled.Container>
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            animate={{ opacity: opacityCycle }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ marginBottom: '20px', width: '217.56px', height: '316px' }}
            onAnimationComplete={() => cycleOpacity()}
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
          <IndividualCard
            key={product.id}
            product={product}
          />
        </motion.div>
      ))}
    </Styled.Container>
  )
}
