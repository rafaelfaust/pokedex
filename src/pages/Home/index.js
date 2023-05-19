import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import { Cards, LoadMoreButton, Search, ThemeButton } from '../../components'
import { ThemeContext } from '../../hooks'
import { Header, HomeContainer } from './styles'

export function Home() {
  const { theme } = useContext(ThemeContext)

  const [allPokemons, setAllPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [cont, setCont] = useState(10)

  useEffect(() => {
    getAllPokemons()
    getPokemons(cont)
  }, [cont])

  function getAllPokemons() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => setAllPokemons(response))
  }

  function getPokemons(cont) {
    const linkList = []
    for (let i = 1; i <= cont; i++) {
      linkList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    setPokemons([])
    axios
      .all(linkList.map(link => axios.get(link)))
      .then(response => setPokemons(response))
  }

  function pokemonFilter(name) {
    if (name !== '') {
      const filteredPokemons = []
      for (const i in allPokemons.data.results) {
        if (allPokemons.data.results[i].name.includes(name)) {
          filteredPokemons.push(allPokemons.data.results[i])
        }
      }
      console.log(filteredPokemons, 'for')
      if (filteredPokemons === []) {
        console.log(filteredPokemons, 'if')
      }
      axios
        .all(filteredPokemons.map(item => axios.get(item.url)))
        .then(response => setPokemons(response))
    } else {
      console.log('x')
      getPokemons(cont)
    }
  }

  function loadMore() {
    if (cont >= 150) {
      setCont(151)
      return
    }
    setCont(cont + 10)
  }

  return (
    <HomeContainer theme={theme}>
      <Header>
        <a href="/">
          <img height={'50px'} src="pokemon.png" alt="POKEMON" />
        </a>
        <div>
          <Search pokemonFilter={pokemonFilter} />
          <ThemeButton />
        </div>
      </Header>
      <Cards pokemons={pokemons} />
      <LoadMoreButton loadMore={loadMore} />
    </HomeContainer>
  )
}
