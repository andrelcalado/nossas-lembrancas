'use client'

// Core
import React from 'react'

// Libraries
import { SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// Styles
import {
  HomeWrapper,
  HomeCTAs,
  HomeTexts,
  HomeHeroSlider,
  PageContent,  
} from "./styles";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

// Hooks
import { useAppContext } from '@/components/ProvidersWrapper';

// Components
import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import HeroSliderCard from '@/components/HeroSliderCard';

// Constants
import { heroSliderData } from '@/constants/dataArray';

export default function Home() {
  const {
    setLoginMode,
    setLoginModal,
  } = useAppContext();

  return (
    <PageContent>
      <LoginForm />

      <HomeWrapper className="container">
        <HomeTexts>
          <h1>Um <strong>Presente</strong> Cheio de Memórias <strong>Únicas</strong></h1>
          <p>Surpreenda quem você ama com uma página e um app exclusivo que reúne os melhores momentos de vocês. ❤️</p>

          <HomeCTAs>
            <li>
              <Button onClick={() => {
                setLoginMode(false);
                setLoginModal(true);
              }}>Criar o nosso</Button>
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
          {heroSliderData?.map(({ media, mediaType, desc, date }, index) => (
            <SwiperSlide key={index}>
              <HeroSliderCard
                media={media}
                mediaType={mediaType}
                desc={desc}
                date={date}
              />
            </SwiperSlide>
          ))}
        </HomeHeroSlider>
      </HomeWrapper>
    </PageContent>
  );
}
