// Core
import React from 'react'

// Libraries
import Image from 'next/image'

// Assets
import logoLabel from '@/app/assets/icon/logo-label.svg'

// Styles
import {
  HeaderButtons,
  HeaderContent,
  HeaderWrapper,
} from './styles'

const Header = (): JSX.Element => {
  return (
    <HeaderContent>
      <HeaderWrapper className="container">
        <Image src={logoLabel} alt="Logo marca" />

        <HeaderButtons>
          <li>
            <button>Nossa lembrança</button>
          </li>
        </HeaderButtons>
      </HeaderWrapper>
    </HeaderContent>
  )
}
export default Header