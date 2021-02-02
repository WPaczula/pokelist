import { fetchPokemonInfo } from '@lib/api'
import { useQuery } from 'react-query'

const usePokemons = () => {
	const { data } = useQuery(['pokemons'], () => fetchPokemonInfo(), { refetchOnMount: false })

	return data
}

export default usePokemons
