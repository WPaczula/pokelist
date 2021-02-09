import { PokemonInfo } from '@declarations/pokemon-info'
import { useRef, useState } from 'react'
import { Alert } from 'react-native'

const usePokemonSearch = (pokemons?: PokemonInfo[]) => {
	const [searchText, setSearchText] = useState('')
	const listRef = useRef<any>()

	const scrollToPokemon = () => {
		const pokemonIndex = pokemons?.findIndex(
			(p) => p.name.toLowerCase().includes(searchText.toLowerCase()) || p.number.includes(searchText)
		)

		if (pokemonIndex === -1 || searchText === '') {
			Alert.prompt('No pokemon found')
			return
		}

		listRef.current.scrollToIndex({ index: pokemonIndex, animated: true })
		setSearchText('')
	}

	return { searchText, setSearchText, listRef, onSearch: scrollToPokemon }
}

export default usePokemonSearch
