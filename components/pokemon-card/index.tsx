import React, { memo } from 'react'
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native'
import { PokemonInfo } from '@declarations/pokemon-info'
import { mapTypeToIcon } from '@utils/image'
import { SharedElement } from 'react-navigation-shared-element'

interface Props {
	pokemon: PokemonInfo
}

const { width } = Dimensions.get('window')
export const ITEM_SIZE = width * 0.5
const MARGIN = width * 0.07

const PokemonCard = memo(({ pokemon }: Props) => {
	return (
		<View style={styles.card}>
			<View style={styles.container}>
				<SharedElement id={`pokemon.${pokemon.name}.types`} style={styles.iconsContainer}>
					<>
						{pokemon.types.map((t) => (
							<Image key={t} source={mapTypeToIcon(t)} style={styles.icon} />
						))}
					</>
				</SharedElement>
				<SharedElement id={`pokemon.${pokemon.name}.number`} style={styles.numberContainer}>
					<Text style={styles.number}>#{pokemon.number}</Text>
				</SharedElement>
				<SharedElement id={`pokemon.${pokemon.name}.image`}>
					<Image source={{ uri: pokemon.image }} style={styles.image} />
				</SharedElement>
				<Text style={styles.name}>{pokemon.name}</Text>
			</View>
		</View>
	)
})

const ICON_SIZE = 15
const styles = StyleSheet.create({
	card: {
		width: ITEM_SIZE,
		height: ITEM_SIZE,
	},
	container: {
		position: 'relative',
		marginHorizontal: MARGIN,
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 34,
		paddingHorizontal: 15,
		paddingVertical: 25,
	},
	name: {
		textTransform: 'uppercase',
		fontFamily: 'sans-serif',
		letterSpacing: 1.5,
		fontSize: 12,
		marginTop: 9,
	},
	iconsContainer: {
		flexDirection: 'row',
		position: 'absolute',
		right: 15,
		top: 15,
	},
	numberContainer: {
		position: 'absolute',
		top: 15,
		left: 15,
	},
	number: {
		fontSize: 10,
		color: '#aaa',
	},
	icon: {
		width: ICON_SIZE,
		height: ICON_SIZE,
		marginHorizontal: 2,
	},
	image: {
		aspectRatio: 1,
		resizeMode: 'contain',
		margin: 0,
		backgroundColor: 'transparent',
		marginVertical: 10,
		width: 100,
	},
})

export default PokemonCard
