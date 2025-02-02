// Core
import Image from 'next/image'

// Assets
import logoWhite from '@/assets/icon/logo-white.svg'

// Components
import SocialButton from '../SocialButton'

// Constants
import { footerSocialMediaData } from '@/constants/dataArray'

// Styles
import {
  FooterBottomContent,
  FooterContainer,
  FooterContent,
  FooterSocialMedia,
  FooterTopContent
} from './styles'

const Footer = () => {
  return (
    <FooterContent>
      <FooterContainer className="container">
        <FooterTopContent>
          <Image src={logoWhite} alt="Logo marca" />

          <FooterSocialMedia>
            {footerSocialMediaData.map(({ icon, url }, index) => (
              <li key={index}>
                <SocialButton
                  icon={icon}
                  url={url}
                />
              </li>
            ))}
          </FooterSocialMedia>
        </FooterTopContent>

        <FooterBottomContent>
          Copyright © 2025 - Nossas Lembranças - todos os direitos reservados.
        </FooterBottomContent>
      </FooterContainer>
    </FooterContent>
  )
}

export default Footer