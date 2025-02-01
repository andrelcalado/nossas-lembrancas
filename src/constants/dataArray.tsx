// Assets
import heroPhoto0 from '@/assets/img/slider-photo-0.jpg'
import heroPhoto1 from '@/assets/img/slider-photo-1.jpg'
import heroPhoto3 from '@/assets/img/slider-photo-3.jpg'
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTiktok,
  BiLogoGmail,
  BiSolidVideos
} from "react-icons/bi"
import { IoIosText } from "react-icons/io";
import { TbPhotoFilled } from "react-icons/tb";
import Plan0 from '@/assets/icon/plan-0.jpg';
import Plan1 from '@/assets/icon/plan-1.jpg';
import Plan2 from '@/assets/icon/plan-2.jpg';

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
    icon: <BiLogoFacebook />,
    url: 'https://www.facebook.com',
  },
  {
    icon: <BiLogoInstagramAlt />,
    url: 'https://www.instagram.com',
  },
  {
    icon: <BiLogoLinkedin />,
    url: 'https://www.linkedin.com',
  },
  {
    icon: <BiLogoTiktok />,
    url: 'https://www.tiktok.com',
  },
  {
    icon: <BiLogoGmail />,
    url: 'mailto:2bWkA@example.com',
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