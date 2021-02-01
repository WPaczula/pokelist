import React from 'react'
import { StyleSheet, View, StatusBar, FlatList } from 'react-native'
import PokemonCard, { ITEM_SIZE } from '@components/pokemon-card'

const POKEMON_NUMBERS = Array(151)
	.fill(0)
	.map((_, index) => index + 1)

const PokemonList = () => {
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<FlatList<number>
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={{
					alignItems: 'center',
				}}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				bounces={false}
				data={POKEMON_NUMBERS}
				keyExtractor={(item) => String(item)}
				renderItem={({ item }) => <PokemonCard number={item} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default PokemonList
