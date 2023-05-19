import React, { useContext } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { ThemeContext } from '../../hooks'
import { ButtonContainer, StyledButton } from './styles'

export function ThemeButton() {
  const { themes, theme, setTheme, setTemaAnterior } = useContext(ThemeContext)

  return (
    <ButtonContainer>
      <StyledButton
        theme={theme}
        onClick={() => {
          setTemaAnterior(theme)
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }}
      >
        {theme === themes.light ? <FaMoon /> : <BsFillSunFill />}
      </StyledButton>
    </ButtonContainer>
  )
}
