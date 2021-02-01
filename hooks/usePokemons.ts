import { fetchPokemonInfo } from '@lib/api'
import { useQuery } from 'react-query'

const usePokemon = (number: number) => {
	const { data, isLoading } = useQuery(['pokemon', number], () => fetchPokemonInfo(number), { refetchOnMount: false })

	return {
		loading: isLoading,
		data,
	}
}

export default usePokemon
