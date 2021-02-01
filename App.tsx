import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import PokemonList from '@components/pokemon-list'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PokemonList />
		</QueryClientProvider>
	)
}
