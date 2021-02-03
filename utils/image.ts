import { Type } from '@declarations/types'

export const mapTypeToImage = (type: Type) => {
	switch (type) {
		case 'bug':
			return require('@assets/bug.jpg')
		case 'dark':
			return require('@assets/dark.jpg')
		case 'electric':
			return require('@assets/electric.jpg')
		case 'fairy':
			return require('@assets/fairy.jpg')
		case 'fighting':
			return require('@assets/fighting.jpg')
		case 'fire':
			return require('@assets/fire.jpg')
		case 'ghost':
			return require('@assets/ghost.jpg')
		case 'grass':
			return require('@assets/grass.jpg')
		case 'ground':
			return require('@assets/ground.jpg')
		case 'ice':
			return require('@assets/ice.jpg')
		case 'normal':
			return require('@assets/normal.jpg')
		case 'poison':
			return require('@assets/poison.jpg')
		case 'psychic':
			return require('@assets/psychic.jpg')
		case 'rock':
			return require('@assets/rock.jpg')
		case 'steel':
			return require('@assets/steel.jpg')
		case 'water':
			return require('@assets/water.jpg')
	}
}
