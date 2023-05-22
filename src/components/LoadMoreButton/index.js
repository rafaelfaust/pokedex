import React, { useContext } from 'react'

/* eslint-disable react/prop-types */
import { ThemeContext } from '../../hooks'
import { ButtonContainer, StyledButton } from './styles'

export function LoadMoreButton(props) {
  const { temaAnterior } = useContext(ThemeContext)

  const cont = 10

  function handleClick() {
    props.loadMore(cont)
  }

  return (
    <ButtonContainer>
      <StyledButton
        theme={temaAnterior}
        onClick={() => {
          handleClick()
        }}
      >
        Load more pokémons
      </StyledButton>
    </ButtonContainer>
  )
}
