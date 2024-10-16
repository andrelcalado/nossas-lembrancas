// Assets
import heroPhoto0 from '@/app/assets/img/slider-photo-0.jpg'
import heroPhoto1 from '@/app/assets/img/slider-photo-1.jpg'
import heroPhoto2 from '@/app/assets/img/slider-photo-2.jpg'
import heroPhoto3 from '@/app/assets/img/slider-photo-3.jpg'
import heroPhoto4 from '@/app/assets/img/slider-photo-4.jpg'
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
  TimelineItemDataType,
} from '@/types/dataTypes'

export const heroSliderData: HeroSliderDataType = [
  {
    photo: heroPhoto0,
    desc: 'Aquele pôr do sol inesquecível na nossa viagem à praia',
    date: '01/01/2023'
  },
  {
    photo: heroPhoto1,
    desc: 'Nosso jantar especial de aniversário, só nós dois',
    date: '01/01/2023'
  },
  {
    photo: heroPhoto2,
    desc: 'O dia em que você me surpreendeu com flores no parque',
    date: '01/01/2023'
  },
  {
    photo: heroPhoto3,
    desc: 'Nosso primeiro fim de semana juntos na serra, só nós',
    date: '01/01/2023'
  },
  {
    photo: heroPhoto4,
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