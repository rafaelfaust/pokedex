import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { Tab, Tabs } from 'react-tabs'

import {
  Abilities,
  BackButton,
  Moves,
  ThemeButton,
  Pokemon
} from '../../components'
import { ThemeContext } from '../../hooks'
import {
  Container,
  DetailsCard,
  HeaderBar,
  PokemonSection,
  StyledTabList,
  StyledTabPanel
} from './styles'

export function CardDetails() {
  const { themes, theme } = useContext(ThemeContext)

  const { id } = useParams()

  const [pokemon, setPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

  useEffect(() => {
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      setPokemon(response)
      setAbilities(response.data.abilities)
      setMoves(response.data.moves)
    })
  }

  return (
    <DetailsCard theme={theme}>
      {pokemon.data ? (
        <Container theme={theme} types={themes.types} pokemon={pokemon.data}>
          <HeaderBar>
            <BackButton />
            <ThemeButton />
          </HeaderBar>
          <Pokemon props={pokemon.data} />
          <PokemonSection theme={theme} themes={themes}>
            <Tabs>
              <StyledTabList
                theme={theme}
                types={themes.types}
                pokemon={pokemon.data}
              >
                <Tab>Abilities</Tab>
                <Tab>Moves</Tab>
              </StyledTabList>

              <StyledTabPanel>
                <Abilities props={abilities} />
              </StyledTabPanel>
              <StyledTabPanel>
                <Moves props={moves} />
              </StyledTabPanel>
            </Tabs>
          </PokemonSection>
        </Container>
      ) : (
        <ClipLoader color="#36d7b7" />
      )}
    </DetailsCard>
  )
}
