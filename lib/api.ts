import { PokemonInfo } from '@declarations/pokemon-info'
import { Type } from '@declarations/types'

const baseUrl = 'https://graphql-pokemon2.vercel.app'

interface PokemonDto {
	number: string
	name: string
	image: string
	types: string[]
	resistant: string[]
	weaknesses: string[]
}

const query = `
query pokemons {
	pokemons(first: 151) {
	  number
	  name
	  image
	  types
	  resistant
	  weaknesses
	}
  }
`

const mapToType = (string: string) => string.toLowerCase() as Type

export const fetchPokemonInfo = (): Promise<PokemonInfo[]> => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query }),
	})
		.then((data) => data.json())
		.then(({ data }) => {
			console.log(data)
			return data.pokemons
		})
		.then((pokemons: PokemonDto[]): PokemonInfo[] =>
			pokemons.map((dto) => ({
				image: dto.image,
				name: dto.name,
				types: dto.types.map(mapToType),
				number: dto.number,
				resistant: dto.resistant.map(mapToType),
				weaknesses: dto.weaknesses.map(mapToType),
			}))
		)
}
