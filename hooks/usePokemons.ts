import { useState, useEffect } from 'react'
import { fetchPokemonInfo, PokemonInfo } from '@lib/api'

const usePokemons = () => {
	const [pokemons, setPokemons] = useState<PokemonInfo[]>([])

	useEffect(() => {
		const loadPokemons = async () => {
			const pokemons = await fetchPokemonInfo()

			setPokemons(pokemons)
		}

		loadPokemons()
	}, [])

	return {
		loading: pokemons.length === 0,
		pokemons,
	}
}

export default usePokemons
