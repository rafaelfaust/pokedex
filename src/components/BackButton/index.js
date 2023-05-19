import React, { useContext } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../hooks'
import { ButtonContainer, StyledButton } from './styles'

export function BackButton() {
  const { theme } = useContext(ThemeContext)

  return (
    <ButtonContainer>
      <StyledButton theme={theme}>
        <Link to={'/'}>
          <IoChevronBackOutline theme={theme} />
        </Link>
      </StyledButton>
    </ButtonContainer>
  )
}
