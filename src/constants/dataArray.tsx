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

export const PlansResourcers: Array<PlanResourceDataType> = [
  {
    plan: 'Essencial',
    phrase: 2,
    video: 1,
    photo: 5,
    albumMode: false,
  },
  {
    plan: 'Especial',
    phrase: 6,
    video: 3,
    photo: 10,
    albumMode: true,
  },
  {
    plan: 'Inesquecível',
    phrase: 14,
    video: 7,
    photo: 22,
    albumMode: true,
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
]