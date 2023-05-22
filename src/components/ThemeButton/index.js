import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

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
        {theme === themes.light ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </StyledButton>
    </ButtonContainer>
  )
}
