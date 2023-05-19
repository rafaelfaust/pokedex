import React, { useContext } from 'react'

/* eslint-disable react/prop-types */
import { ThemeContext } from '../../hooks'
import { PokemonHeader, BehindName } from './styles'

export function Pokemon(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <BehindName>{props.props.name}</BehindName>
      <PokemonHeader theme={theme}>
        <div>
          <h2>{props.props.name}</h2>
          <h3>
            {props.props.types && props.props.types.length > 0
              ? props.props.types[0].type.name +
                (props.props.types[1]
                  ? ' / ' + props.props.types[1].type.name
                  : '')
              : ''}
          </h3>
        </div>
        <img
          src={props.props.sprites.other['official-artwork'].front_default}
          alt={`imagem do ${props.props.name}`}
          height={'100%'}
        />
      </PokemonHeader>
    </>
  )
}
