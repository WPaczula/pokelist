import { Type } from '@declarations/types'

export const mapTypeToImage = (type: Type) => {
	switch (type) {
		case 'bug':
			return require('@assets/background/bug.jpg')
		case 'dark':
			return require('@assets/background/dark.jpg')
		case 'dragon':
			return require('@assets/background/dragon.jpg')
		case 'electric':
			return require('@assets/background/electric.jpg')
		case 'fairy':
			return require('@assets/background/fairy.jpg')
		case 'fighting':
			return require('@assets/background/fighting.jpg')
		case 'fire':
			return require('@assets/background/fire.jpg')
		case 'ghost':
			return require('@assets/background/ghost.jpg')
		case 'grass':
			return require('@assets/background/grass.jpg')
		case 'ground':
			return require('@assets/background/ground.jpg')
		case 'ice':
			return require('@assets/background/ice.jpg')
		case 'normal':
			return require('@assets/background/normal.jpg')
		case 'poison':
			return require('@assets/background/poison.jpg')
		case 'psychic':
			return require('@assets/background/psychic.jpg')
		case 'rock':
			return require('@assets/background/rock.jpg')
		case 'steel':
			return require('@assets/background/steel.jpg')
		case 'water':
			return require('@assets/background/water.jpg')
	}
}

export const mapTypeToIcon = (type: Type) => {
	switch (type) {
		case 'bug':
			return require('@assets/icons/bug.png')
		case 'dark':
			return require('@assets/icons/dark.png')
		case 'dragon':
			return require('@assets/icons/dragon.png')
		case 'electric':
			return require('@assets/icons/electric.png')
		case 'fairy':
			return require('@assets/icons/fairy.png')
		case 'fighting':
			return require('@assets/icons/fighting.png')
		case 'fire':
			return require('@assets/icons/fire.png')
		case 'flying':
			return require('@assets/icons/flying.png')
		case 'ghost':
			return require('@assets/icons/ghost.png')
		case 'grass':
			return require('@assets/icons/grass.png')
		case 'ground':
			return require('@assets/icons/ground.png')
		case 'ice':
			return require('@assets/icons/ice.png')
		case 'normal':
			return require('@assets/icons/normal.png')
		case 'poison':
			return require('@assets/icons/poison.png')
		case 'psychic':
			return require('@assets/icons/psychic.png')
		case 'rock':
			return require('@assets/icons/rock.png')
		case 'steel':
			return require('@assets/icons/steel.png')
		case 'water':
			return require('@assets/icons/water.png')
	}
}
