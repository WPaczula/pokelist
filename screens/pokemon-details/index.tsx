import React from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { SharedElementsComponentConfig } from 'react-navigation-shared-element'
import { PokemonInfo } from '@declarations/pokemon-info'
import { BackdropImage } from '@components/backdrop'
import Versus from '@components/versus'
import { SharedElement } from 'react-navigation-shared-element'
import { mapTypeToIcon } from '@utils/image'

const { width, height } = Dimensions.get('window')
interface Props {
	navigation: NavigationStackProp
	route: any
}

const PokemonDetails = ({ route, navigation }: Props) => {
	const pokemon: PokemonInfo = route.params.item

	return (
		<View style={styles.container}>
			<>
				<View style={styles.backgroundContainer}>
					<BackdropImage type={pokemon.types[0]} />
				</View>
				<View style={styles.card}>
					<View style={styles.topBox}>
						<View style={styles.numberContainer}>
							<Text style={styles.number}>#{pokemon.number}</Text>
						</View>
						<View style={styles.iconsContainer}>
							<>
								{pokemon.types.map((t) => (
									<Image key={t} source={mapTypeToIcon(t)} style={styles.icon} />
								))}
							</>
						</View>
					</View>
					<SharedElement id={`pokemon.${pokemon.name}.image`} style={{ marginTop: 90 }}>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<Image source={{ uri: pokemon.image }} style={styles.image} />
						</TouchableWithoutFeedback>
					</SharedElement>
					<View style={styles.bottomBox}>
						<Text style={styles.name}>{pokemon.name}</Text>
						<Versus resistant={pokemon.resistant} weaknesses={pokemon.weaknesses} />
					</View>
				</View>
			</>
		</View>
	)
}

const styles = StyleSheet.create({
	topBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 8,
		borderRadius: 64,
		backgroundColor: 'white',
		flexDirection: 'row',
		width: '90%',
		marginTop: 64,
	},
	bottomBox: {
		display: 'flex',
		alignItems: 'center',
		padding: 8,
		borderRadius: 8,
		backgroundColor: 'white',
		borderColor: '#ddd',
		borderWidth: 1,
		width: '100%',
	},
	backIcon: {
		position: 'absolute',
		top: 25,
		left: 25,
	},
	backgroundContainer: {
		position: 'relative',
		top: 0,
		bottom: 0,
		height,
		width,
	},
	container: {
		height,
		width,
		position: 'relative',
	},
	name: {
		textTransform: 'uppercase',
		fontFamily: 'sans-serif',
		letterSpacing: 2,
		fontSize: 24,
		margin: 8,
		color: '#777',
	},
	iconsContainer: {
		flexDirection: 'row',
	},
	numberContainer: {},
	number: {
		fontSize: 25,
		color: '#aaa',
		marginLeft: 4,
	},
	icon: {
		width: 35,
		height: 35,
		marginHorizontal: 2,
	},
	card: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	image: { aspectRatio: 1, width: '80%', resizeMode: 'contain', marginBottom: 64 },
})

const sharedElements: SharedElementsComponentConfig = (route) => {
	const pokemon: PokemonInfo = route.params.item

	return [
		{
			id: `pokemon.${pokemon.name}.image`,
			animation: 'move',
			resize: 'clip',
			align: 'center-bottom',
		},
	]
}
PokemonDetails.sharedElements = sharedElements

export default PokemonDetails
