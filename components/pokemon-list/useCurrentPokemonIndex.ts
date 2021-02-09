import { useCallback, useState } from 'react'
import { ViewToken } from 'react-native'

const useCurrentPokemonIndex = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(1)
	const setCurrentPokemon = useCallback(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			setCurrentIndex(viewableItems[1].index || 1)
		},
		[setCurrentIndex]
	)

	return { currentIndex, setCurrentPokemon }
}

export default useCurrentPokemonIndex
