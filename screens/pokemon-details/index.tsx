import React from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { SharedElementsComponentConfig } from 'react-navigation-shared-element'
import { PokemonInfo } from '@declarations/pokemon-info'
import { BackdropGradient, BackdropImage, BACKDROP_HEIGHT } from '@components/backdrop'
import Versus from '@components/versus'

const { width, height } = Dimensions.get('window')
interface Props {
	navigation: NavigationStackProp
	route: any
}

const PokemonDetails = ({ route }: Props) => {
	const item: PokemonInfo = route.params.item

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<BackdropImage type={item.types[0]} />
				<BackdropGradient />
			</View>
			<View style={styles.card}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<Versus resistant={item.resistant} weaknesses={item.weaknesses} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundContainer: {
		position: 'relative',
		top: 0,
		bottom: 0,
		height: BACKDROP_HEIGHT,
		width,
	},
	container: {
		height,
		width,
		position: 'relative',
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 64,
		position: 'absolute',
		top: '20%',
		bottom: '20%',
		left: '10%',
		right: '10%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	image: { aspectRatio: 1, height: '60%', width: '60%', resizeMode: 'contain' },
})

const sharedElements: SharedElementsComponentConfig = (navigation, otherNavigation, showing) => {
	return []
}
PokemonDetails.sharedElements = sharedElements

export default PokemonDetails
