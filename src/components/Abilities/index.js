/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext } from '../../hooks'
import { Container } from './styles'

export function Abilities(props) {
  const { theme } = useContext(ThemeContext)

  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    getMoves()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getMoves() {
    axios
      .all(props.props.map(item => axios.get(item.ability.url)))
      .then(response => setAbilities(response))
  }

  return (
    <Container theme={theme}>
      <h1>Abilities:</h1>
      {abilities.map(item => (
        <div key={item.data.name}>
          <h2>{item.data.name}</h2>
          <p>{item.data.effect_entries[1].effect}</p>
        </div>
      ))}
    </Container>
  )
}
