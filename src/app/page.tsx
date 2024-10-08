'use client'

// Libraries
import { SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// Styles
import {
  HomeContent,
  HomeWrapper,
  HomeCTAs,
  HomeTexts,
  HomeHeroSlider,  
} from "./styles";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

// Components
import Button from "@/components/Button";
import HeroSliderCard from '@/components/HeroSliderCard';

// Constants
import { heroSliderData } from '@/constants/dataArray';

export default function Home() {
  return (
    <HomeContent>
      <HomeWrapper className="container">
        <HomeTexts>
          <h1>Um <strong>Presente</strong> Cheio de Memórias <strong>Únicas</strong></h1>
          <p>Surpreenda quem você ama com uma página e um app exclusivo que reúne os melhores momentos de vocês. ❤️</p>

          <HomeCTAs>
            <li>
              <Button>Criar o nosso</Button>
            </li>
            <li>
              <Button variation="border">Ver exemplo</Button>
            </li>
          </HomeCTAs>
        </HomeTexts>

        <HomeHeroSlider
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 3,
          }}
          speed={500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
        >
          {heroSliderData?.map(({ photo, desc, date }, index) => (
            <SwiperSlide key={index}>
              <HeroSliderCard
                photo={photo}
                desc={desc}
                date={date}
              />
            </SwiperSlide>
          ))}
        </HomeHeroSlider>


        {/* <LoginForm /> */}
      </HomeWrapper>
    </HomeContent>
  );
}
