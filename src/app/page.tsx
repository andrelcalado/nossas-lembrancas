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
  SectionWrapper,
  Container,
  Title,
  BenefitsGrid,
  BenefitCard,
  IconWrapper,
  BenefitTitle,
  BenefitDescription,  
} from "./styles";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

// Hooks
import useLogin from './useLogin';
import { useAppContext } from '@/components/ProvidersWrapper';

// Components
import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import HeroSliderCard from '@/components/HeroSliderCard';
import PreviewModal from '@/components/PreviewModal';
import {
  PaymentMethodsModalContent,
  PaymentMethodsModalWrapper,
} from '@/components/PaymentMethodsModal/styles';

// Assets
import { CgClose } from 'react-icons/cg';

// Constants
import { heroSliderData, previewData } from '@/constants/dataArray';
import { CloseButton, ModalOverlay } from '@/components/LoginForm/styles';
import { FaHeart } from 'react-icons/fa6';
import { FaPhotoVideo, FaShareAlt } from 'react-icons/fa';

export default function Home() {
  const {
    setLoginMode,
    setLoginModal,
  } = useAppContext();

  const {
    openPreviewModal,
    setOpenPreviewModal,
    howItWorksModal,
    setHowItWorksModal,
  } = useLogin();

  const benefits = [
    {
      icon: <FaHeart size={40} />,
      title: "Memórias que Unem",
      description:
        "Crie uma linha do tempo única com fotos, vídeos e datas especiais que celebram o seu amor.",
    },
    {
      icon: <FaPhotoVideo size={40} />,
      title: "Animação Personalizada",
      description:
        "Transforme seus momentos em uma animação emocionante que conta a história do seu relacionamento.",
    },
    {
      icon: <FaShareAlt size={40} />,
      title: "Compartilhamento Fácil",
      description:
        "Compartilhe sua linha do tempo com quem você ama através de um link ou QR Code.",
    },
  ];

  return (
    <>
      <PageContent>
        <LoginForm />

        <PreviewModal
          timelineData={previewData}
          openModal={openPreviewModal}
          watermark={false}
          setOpenModal={setOpenPreviewModal}
          handleToGift={() => {
            setOpenPreviewModal(false);
            setLoginModal(true);
          }}
        />

        <PaymentMethodsModalContent active={howItWorksModal}>
          <ModalOverlay
            role="button"
            onClick={() => setHowItWorksModal(false)}
          />

          <PaymentMethodsModalWrapper>
            <CloseButton onClick={() => setHowItWorksModal(false)}>
              <CgClose />
            </CloseButton>
    
            <h3>Como <strong>funciona</strong></h3>
            <p>
              Assista o vídeo abaixo e aprenda a criar uma página exclusiva para guardar suas memórias e surpreender quem você ama.
            </p>

            <video controls src="/assets/video/video-explicativo.mp4" />
          </PaymentMethodsModalWrapper>
        </PaymentMethodsModalContent>

        <HomeWrapper className="container">
          <HomeTexts>
            <h1>Um <strong>Presente</strong> Cheio de Memórias <strong>Únicas</strong></h1>
            <p>Surpreenda quem você ama com um presente e uma página exclusiva que reúne os melhores momentos de vocês. ❤️</p>

            <HomeCTAs>
              <li>
                <Button onClick={() => {
                  setLoginMode(false);
                  setLoginModal(true);
                }}>Criar o nosso</Button>
              </li>
              <li>
                <Button
                  variation="border"
                  onClick={() => setOpenPreviewModal(true)}
                >
                  Ver exemplo
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => setHowItWorksModal(true)}
                  variation="border"
                >
                  Como funciona
                </Button>
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

      <SectionWrapper>
        <Container>
          <Title>Por que escolher nosso produto?</Title>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <IconWrapper>{benefit.icon}</IconWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
    </SectionWrapper>
  </>
  );
}
