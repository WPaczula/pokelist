import { Type } from './types'

export interface PokemonInfo {
	number: string
	name: string
	image: string
	types: Type[]
	weaknesses: Type[]
	resistant: Type[]
}
