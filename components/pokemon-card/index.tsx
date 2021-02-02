import React from 'react'
import { Dimensions, StyleSheet, View, Image, Text, Animated } from 'react-native'
import { PokemonInfo } from '@declarations/pokemon-info'

interface Props {
	pokemon: PokemonInfo
}

const { width } = Dimensions.get('window')
export const ITEM_SIZE = width * 0.5
const MARGIN = width * 0.05

const PokemonCard = ({ pokemon }: Props) => {
	return (
		<View style={styles.card}>
			<View style={styles.container}>
				<Image source={{ uri: pokemon.image }} style={styles.image} />
				<View style={styles.textContainer}>
					<Text>#{pokemon.number}</Text>
					<Text style={styles.name}>{pokemon.name}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	name: {
		textTransform: 'uppercase',
		fontFamily: 'sans-serif',
		letterSpacing: 2,
		marginTop: 5,
	},
	card: {
		width: ITEM_SIZE,
		height: ITEM_SIZE,
	},
	container: {
		marginHorizontal: MARGIN,
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 34,
		padding: MARGIN,
	},
	image: {
		width: '100%',
		aspectRatio: 1,
		resizeMode: 'contain',
		margin: 0,
		backgroundColor: 'transparent',
		marginBottom: 10,
	},
	textContainer: {
		fontSize: 12,
		display: 'flex',
		flexDirection: 'column',
	},
})

export default PokemonCard
