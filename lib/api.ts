import { PokemonInfo } from '@declarations/pokemon-info'

const baseUrl = 'https://pokeapi.co/api/v2'

interface PokemonDto {
	name: string
	sprites: {
		front_default: string
	}
}

export const fetchPokemonInfo = (number: number): Promise<PokemonInfo> => {
	return fetch(`${baseUrl}/pokemon/${number}`, {
		headers: { 'Content-Type': 'application/json' },
	})
		.then((data) => data.json())
		.then(({ name, sprites }: PokemonDto) => ({
			name,
			number,
			image: sprites.front_default,
		}))
}
