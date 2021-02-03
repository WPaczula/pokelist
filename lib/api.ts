import { PokemonInfo } from '@declarations/pokemon-info'
import { Type } from '@declarations/types'

const baseUrl = 'https://graphql-pokemon2.vercel.app'

interface PokemonDto {
	number: string
	name: string
	image: string
	types: string[]
}

const query = `
query pokemons {
	pokemons(first: 151) {
	  number
	  name
	  image
	  types
	}
  }
`

export const fetchPokemonInfo = (): Promise<PokemonInfo[]> => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query }),
	})
		.then((data) => data.json())
		.then(({ data }) => {
			return data.pokemons
		})
		.then((pokemons: PokemonDto[]): PokemonInfo[] =>
			pokemons.map((dto) => ({
				image: dto.image,
				name: dto.name,
				type: dto.types[0].toLowerCase() as Type,
				number: dto.number,
			}))
		)
}
