// Core
import Image from 'next/image'

// Types
import { HeroSliderCardProps } from '@/types/layoutTypes'

// Styles
import { HeroSliderCardContent,
  HeroSliderCardPhoto,
  HeroSliderDate
} from './styles'

const HeroSliderCard = ({ photo, desc, date }: HeroSliderCardProps) => {
  return (
    <HeroSliderCardContent>
      <HeroSliderCardPhoto>
        <Image src={photo} alt={desc} />
      </HeroSliderCardPhoto>
      <h4>{desc}</h4>
      <HeroSliderDate>
        {date}
      </HeroSliderDate>
    </HeroSliderCardContent>
  )
}

export default HeroSliderCard