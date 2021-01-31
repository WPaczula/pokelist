const baseUrl = 'https://graphql-pokemon2.vercel.app'

export interface PokemonInfo {
	number: number
	name: string
	image: string
}

const getPokemonsQuery = `
query pokemons {
    pokemons(first: 151) {
      number
      name
      image
    }
}`

export const fetchPokemonInfo = (): Promise<PokemonInfo[]> => {
	return fetch(`${baseUrl}/${name}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: getPokemonsQuery }),
	})
		.then((data) => data.json())
		.then(({ data }) => data.pokemons)
}
