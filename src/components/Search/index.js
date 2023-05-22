import React, { useContext } from 'react'

/* eslint-disable react/prop-types */
import Pokeball from '../../assets/Pokeball.png'
import { ThemeContext } from '../../hooks'
import { Container, Input, PokeballImg } from './styles'

export function Search(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <PokeballImg src={Pokeball} alt="Pokeball" />
      <Input
        onChange={e => props.pokemonFilter(e.target.value.toLowerCase())}
        type={'Text'}
        placeholder={'Search...'}
      />
    </Container>
  )
}
