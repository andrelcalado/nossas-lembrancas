// Core
import Image from 'next/image';

// Assets
import heroPhoto0 from '@/assets/img/slider-photo-0.jpg'
import heroPhoto1 from '@/assets/img/slider-photo-1.jpg'
import heroPhoto3 from '@/assets/img/slider-photo-3.jpg'
import {
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoGmail,
  BiSolidVideos
} from "react-icons/bi"
import { IoIosText, IoMdPhotos } from "react-icons/io";
import { TbPhotoFilled } from "react-icons/tb";
import KwaiLogo from '@/assets/icon/logo-kwai.svg';
import Plan0 from '@/assets/icon/plan-0.jpg';
import Plan1 from '@/assets/icon/plan-1.jpg';
import Plan2 from '@/assets/icon/plan-2.jpg';
import { FaFilm } from 'react-icons/fa6';
import { FaEdit, FaShareAlt } from 'react-icons/fa';

// Types
import {
  FooterSocialMediaType,
  HeroSliderDataType,
  IndicatorItemDataType,
  PlanDataENUM,
  PlanResourceDataType,
  TimelineItemDataType,
} from '@/types/dataTypes'

export const heroSliderData: HeroSliderDataType = [
  {
    media: heroPhoto0,
    mediaType: 'photo',
    desc: 'Nossa primeira aula de dança',
    date: '13/03/2014'
  },
  {
    media: 'assets/video/hero-video.mp4',
    mediaType: 'video',
    desc: 'Maior loucura que fizemos em um dia muuuuito frio',
    date: '07/01/2017'
  },
  {
    media: heroPhoto1,
    mediaType: 'photo',
    desc: 'A nossa melhor viagem',
    date: '26/08/2011'
  },
  {
    media: 'assets/video/hero-video-2.mp4',
    mediaType: 'video',
    desc: 'Os melhores dias da minha vida: nossa lua de mel',
    date: '15/05/2022'
  },
  {
    media: heroPhoto3,
    mediaType: 'photo',
    desc: 'Quando voltamos a ser um só',
    date: '09/12/2010'
  },
  {
    media: 'assets/video/hero-video-3.mp4',
    mediaType: 'video',
    desc: 'Festejamos quando conseguimos finalizar nossa casa, foi incrível',
    date: '30/10/2016'
  }
];

export const footerSocialMediaData: Array<FooterSocialMediaType> = [
  {
    icon: <BiLogoInstagramAlt />,
    url: 'https://www.instagram.com/nossas_lembrancas_app/',
  },
  {
    icon: <Image src={KwaiLogo} alt="Ícone kwai" />,
    url: ' https://kwai-video.com/u/@Nossas.lembrancas/hC5CWrOK',
  },
  {
    icon: <BiLogoTiktok />,
    url: 'https://www.tiktok.com/@nossas.lembrancas',
  },
  {
    icon: <BiLogoGmail />,
    url: 'mailto:nossaslembrancasapp@gmail.com',
  },
];

export const MemoryTypes: Array<TimelineItemDataType> = [
  {
    typeLabel: 'Frase',
    typeIcon: <IoIosText />,
    type: 'phrase',
  },
  {
    typeLabel: 'Foto',
    typeIcon: <TbPhotoFilled />,
    type: 'photo',
  },
  {
    typeLabel: 'Vídeo (Em breve)',
    typeIcon: <BiSolidVideos />,
    type: 'video',
    disabled: true,
  }
];

export const PlansData: Array<PlanResourceDataType> = [
  {
    plan: 'Essencial',
    phrase: 2,
    video: 1,
    photo: 5,
    albumMode: false,
    icon: Plan0,
    price: 23.97,
    planPeriod: true,
    music: false,
  },
  {
    plan: 'Especial',
    phrase: 6,
    video: 3,
    photo: 10,
    albumMode: true,
    icon: Plan1,
    price: 34.97,
    planPeriod: true,
    music: true,
  },
  {
    plan: 'Inesquecível',
    phrase: 14,
    video: 7,
    photo: 22,
    albumMode: true,
    icon: Plan2,
    price: 67.37,
    planPeriod: false,
    music: true,
  },
];

export const IndicatorsArray: Array<IndicatorItemDataType>  = [
  {
    icon: <IoIosText />,
    field: 'phrase',
    type: 'phrase',
  },
  {
    icon: <TbPhotoFilled />,
    field: 'photo',
    type: 'photo',
  },
  {
    icon: <BiSolidVideos />,
    field: 'video',
    type: 'video',
  },
];

export const previewLabelContent: Array<JSX.Element> = [
  <span key={0}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={1}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={2}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={3}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={4}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={5}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={6}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={7}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={8}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={9}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={10}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={11}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={12}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={13}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={14}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={15}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={16}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={17}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={18}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={19}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={20}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={21}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={22}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={23}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={24}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={25}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={26}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={27}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={28}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={29}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={30}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={31}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={32}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={33}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={34}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={35}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={36}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={37}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={38}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={39}>{'Pré-visualização '.repeat(10)}</span>,
  <span key={40}>{'Pré-visualização '.repeat(10)}</span>,
]

export const pricesID  : Record<PlanDataENUM, string | undefined> = {
  "Essencial" : process.env.STRIPE_PLAN_1_PRICEID,
  "Especial" : process.env.STRIPE_PLAN_2_PRICEID,
  "Inesquecível" : process.env.STRIPE_PLAN_3_PRICEID
}

export const previewData: Array<TimelineItemDataType> = [
  {
    "desc": "Gostaria de compartilhar com você, meu amor, alguns momentos importantes do nosso relacionamento",
    "mediaOrientation": "vertical",
    "type": "initial-phrase"
  },
  {
    "desc": "Desde o princípio éramos muito intensos, ao ponto de começamos a namorar em menos de 1 mês. Esse dia foi incrível",
    "type": "photo",
    "date": "2021-07-24",
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-1",
    "mediaOrientation": "vertical",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-1?alt=media&token=06f7f3ee-1b92-45a5-8217-55b620cc6ddc"
  },
  {
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-2",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-2?alt=media&token=6b310d85-dd02-4cca-ab06-afb9387aa1ed",
    "disabled": false,
    "desc": "Desde o início o nosso relacionamento era lotado de novas aventuras e experiências únicas. Esse dia foi muito louco kkk",
    "type": "photo",
    "date": "2022-07-09"
  },
  {
    "type": "photo",
    "date": "2022-03-31",
    "disabled": false,
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-3",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-3?alt=media&token=1f2ec023-c33d-454c-95ea-4016cb24a76a",
    "desc": "Também passamos por várias \"desventuras\", mas sempre juntos, sempre nos amando. Período que andamos de metrô "
  },
  {
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-4",
    "date": "2023-04-25",
    "desc": "Algumas desventuras por minha culpa, mas que trouxe muitos aprendizados para nós como pessoa e como casal",
    "type": "photo",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-4?alt=media&token=19c57829-c205-49ac-9647-0599bc0a80df"
  },
  {
    "date": "2024-08-18",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-5?alt=media&token=4b9eb8fa-4209-4b21-8673-085a6c0e3e13",
    "desc": "Independente de tudo, sempre estivemos juntos, tentando ser melhor um para o outro, com muita conversa e sempre com novas aventuras…",
    "disabled": false,
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-5",
    "type": "photo"
  },
  {
    "desc": "Essa foi a nossa última aventura e que 2025 seja repleto de mais momentos como esse ❤️",
    "fileRef": "timelines/N38xPZtLUqZuwzuqba1T4w38FJn2/bianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc/media-6",
    "disabled": false,
    "date": "2025-01-26",
    "photo": "https://firebasestorage.googleapis.com/v0/b/nossas-lembrancas.appspot.com/o/timelines%2FN38xPZtLUqZuwzuqba1T4w38FJn2%2Fbianca-e-andre-bdeab092-449d-40c5-9b23-9fff9bd907fc%2Fmedia-6?alt=media&token=6b27ddc8-7712-426e-b5ba-70ac97bd6a96",
    "type": "photo"
  },
  {
    "type": "phrase",
    "desc": "Te Amo mil milhões ❤️"
  }
]

export const benefits = [
  {
    icon: <FaFilm size={40} />,
    title: "Experiência inesquecível",
    description:
      "Transforme seus sentimentos, fotos e vídeos em uma experiência única e emocionante. 🎬❤️",
  },
  {
    icon: <FaEdit size={40} />,
    title: "Edição sem limites",
    description:
      "Adicione, remova ou atualize sua experiência a qualquer hora. ✨📅",
  },
  {
    icon: <FaShareAlt size={40} />,
    title: "Compartilhe o Amor",
    description:
      "Compartilhe sua linha do tempo com quem você ama, em qualquer dispositivo. 💌📱",
  },
  {
    icon: <IoMdPhotos size={40} />,
    title: "Album digital",
    description:
      "Transforme qualquer dispositivo móvel em um álbum digital. 🖼️❤️",
  },
];