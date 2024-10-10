'use client'

// Core
import React from 'react'

// Libraries
import Image from 'next/image'

// Components
import Button from '../Button'

// Assets
import logoLabel from '@/app/assets/icon/logo-label.svg'

// Hooks
import { useAppContext } from '../ProvidersWrapper'

// Styles
import {
  HeaderButtons,
  HeaderContent,
  HeaderWrapper,
} from './styles'

const Header = (): JSX.Element => {
  const { setLoginModal, setLoginMode } = useAppContext()

  return (
    <HeaderContent>
      <HeaderWrapper className="container">
        <Image src={logoLabel} alt="Logo marca" />

        <HeaderButtons>
          <li>
            <Button
              onClick={() => {
                setLoginMode(true);
                setLoginModal(true);
              }}
              size='xs'
            >
              Conectar
            </Button>
          </li>
        </HeaderButtons>
      </HeaderWrapper>
    </HeaderContent>
  )
}
export default Header