import * as S from './styles'
import CyberMonday from './images/CyberMonday.webp'
import GirlShop from './images/GirlShop.webp'
import Image from 'next/image'
export const Hero = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <Image
          src={CyberMonday}
          alt="Cyber Monday"
        />
        <S.SubTitle>
          Os <strong>melhores produtos</strong> você <strong>encontra aqui!</strong>
        </S.SubTitle>
      </S.LeftContainer>
      <S.RightContainer>

      <Image
        src={GirlShop}
        alt="Girl Shop"

        />
        </S.RightContainer>
    </S.Container>
  )
}
