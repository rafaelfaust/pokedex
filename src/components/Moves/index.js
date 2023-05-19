import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

/* eslint-disable react/prop-types */
import { ThemeContext } from '../../hooks'
import { UlMoves } from './styles'

export function Moves(props) {
  const { theme } = useContext(ThemeContext)

  const [moves, setMoves] = useState([])

  useEffect(() => {
    getMoves()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getMoves() {
    axios
      .all(props.props.map(item => axios.get(item.move.url)))
      .then(response => setMoves(response))
  }

  return (
    <UlMoves theme={theme}>
      <h1>Moves:</h1>
      {moves.map(item => (
        <li key={item.data.name}>{item.data.name}</li>
      ))}
    </UlMoves>
  )
}
