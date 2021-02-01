import React from 'react'
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native'
import usePokemon from '@hooks/usePokemons'

interface Props {
	number: number
}

const { width } = Dimensions.get('window')
export const ITEM_SIZE = width * 0.5
const MARGIN = width * 0.05

const PokemonCard = ({ number }: Props) => {
	const { data, loading } = usePokemon(number)

	if (loading || !data) {
		return null
	}

	return (
		<View style={styles.card}>
			<View style={styles.container}>
				<Image source={{ uri: data.image }} style={styles.image} />
				<Text>{data.name}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: ITEM_SIZE,
		height: ITEM_SIZE,
	},
	container: {
		marginHorizontal: MARGIN,
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		borderRadius: 34,
		padding: MARGIN,
	},
	image: {
		width: '100%',
		aspectRatio: 1,
		height: ITEM_SIZE,
		resizeMode: 'contain',
		margin: 0,
		backgroundColor: 'transparent',
		marginBottom: 10,
	},
})

export default PokemonCard
