// Core
import Image from 'next/image'

// Types
import { HeroSliderCardProps } from '@/types/layoutTypes'

// Assets
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

// Styles
import {
  HeroSliderCardContent,
  HeroSliderCardPhoto,
  HeroSliderDate,
  HeroSliderDescription,
  HeroSliderHearts
} from './styles'

const HeroSliderCard = ({
  media,
  mediaType,
  desc,
  date,
}: HeroSliderCardProps) => {
  return (
    <HeroSliderCardContent>
      <HeroSliderCardPhoto>
        {mediaType === 'photo' ? (
          <Image src={media} alt={desc} />
        ) : (
          <video
            playsInline
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src={media as string} type="video/mp4" />
          </video>
        )}
      </HeroSliderCardPhoto>
      <HeroSliderDescription>
        <p>{desc}</p>

        <HeroSliderHearts>
          <AiFillHeart size={40} />
          <AiFillHeart size={30} />
          <AiFillHeart size={20} />
        </HeroSliderHearts>
      </HeroSliderDescription>
      <HeroSliderDate>
        <time>{date}</time>

        <CiHeart size={80} />
      </HeroSliderDate>
    </HeroSliderCardContent>
  )
}

export default HeroSliderCard