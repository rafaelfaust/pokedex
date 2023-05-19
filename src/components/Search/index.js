import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'

/* eslint-disable react/prop-types */
import { ThemeContext } from '../../hooks'
import { Container, Input, Pokeball } from './styles'

export function Search(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Pokeball />
      <Input
        onChange={e => props.pokemonFilter(e.target.value.toLowerCase())}
        type={'Text'}
        placeholder={'Capture seu pokemon...'}
      />
    </Container>
  )
}
