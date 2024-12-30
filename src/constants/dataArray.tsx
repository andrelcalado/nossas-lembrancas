// Assets
import heroPhoto0 from '@/assets/img/slider-photo-0.jpg'
import heroPhoto1 from '@/assets/img/slider-photo-1.jpg'
import heroPhoto2 from '@/assets/img/slider-photo-2.jpg'
import heroPhoto3 from '@/assets/img/slider-photo-3.jpg'
import heroPhoto4 from '@/assets/img/slider-photo-4.jpg'
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
  PlanResourceDataType,
  TimelineItemDataType,
} from '@/types/dataTypes'

export const heroSliderData: HeroSliderDataType = [
  {
    media: heroPhoto0,
    mediaType: 'photo',
    desc: 'Aquele pôr do sol inesquecível na nossa viagem à praia',
    date: '01/01/2023'
  },
  {
    media: 'assets/video/hero-video.mp4',
    mediaType: 'video',
    desc: 'O dia em que pulamos no rio e nos conhecemos',
    date: '01/01/2023'
  },
  {
    media: heroPhoto1,
    mediaType: 'photo',
    desc: 'Nosso jantar especial de aniversário, só nós dois',
    date: '01/01/2023'
  },
  {
    media: heroPhoto2,
    mediaType: 'photo',
    desc: 'O dia em que você me surpreendeu com flores no parque',
    date: '01/01/2023'
  },
  {
    media: heroPhoto3,
    mediaType: 'photo',
    desc: 'Nosso primeiro fim de semana juntos na serra, só nós',
    date: '01/01/2023'
  },
  {
    media: heroPhoto4,
    mediaType: 'photo',
    desc: 'A tarde que passamos rindo no café onde nos conhecemos',
    date: '01/01/2023'
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