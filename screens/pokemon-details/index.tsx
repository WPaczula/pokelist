import React from 'react'
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { SharedElementsComponentConfig } from 'react-navigation-shared-element'
import { PokemonInfo } from '@declarations/pokemon-info'
import { BackdropImage } from '@components/backdrop'
import Versus from '@components/versus'
import { SharedElement } from 'react-navigation-shared-element'
import { mapTypeToIcon } from '@utils/image'
import { AntDesign } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')
interface Props {
	navigation: NavigationStackProp
	route: any
}

const PokemonDetails = ({ route, navigation }: Props) => {
	const pokemon: PokemonInfo = route.params.item

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<BackdropImage type={pokemon.types[0]} />
				<AntDesign
					name="back"
					size={36}
					color="white"
					style={styles.backIcon}
					onPress={() => {
						navigation.goBack()
					}}
				/>
			</View>
			<View style={styles.card}>
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
				<SharedElement id={`pokemon.${pokemon.name}.image`} style={{ marginTop: 90 }}>
					<Image source={{ uri: pokemon.image }} style={styles.image} />
				</SharedElement>
				<Versus resistant={pokemon.resistant} weaknesses={pokemon.weaknesses} />
				<Text style={styles.name}>{pokemon.name}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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
		marginBottom: 16,
		color: '#777',
	},
	iconsContainer: {
		flexDirection: 'row',
		position: 'absolute',
		right: 35,
		top: 35,
	},
	numberContainer: {
		position: 'absolute',
		left: 35,
		top: 35,
	},
	number: {
		fontSize: 25,
		color: '#aaa',
	},
	icon: {
		width: 35,
		height: 35,
		marginHorizontal: 2,
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 64,
		position: 'absolute',
		top: '15%',
		bottom: '15%',
		left: '10%',
		right: '10%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	image: { aspectRatio: 1, width: 240, resizeMode: 'contain' },
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
		{
			id: `pokemon.${pokemon.name}.types`,
			animation: 'fade',
		},
		{
			id: `pokemon.${pokemon.name}.number`,
			animation: 'fade',
		},
	]
}
PokemonDetails.sharedElements = sharedElements

export default PokemonDetails
