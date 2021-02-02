import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Animated } from 'react-native'
import PokemonCard, { ITEM_SIZE } from '@components/pokemon-card'
import usePokemons from '@hooks/usePokemons'
import { PokemonInfo } from '@declarations/pokemon-info'
import Loading from '@components/loading'

const PokemonList = () => {
	const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
	const pokemons = usePokemons()

	if (!pokemons) {
		return <Loading />
	}

	return (
		<View style={styles.list}>
			<StatusBar hidden />
			<Animated.FlatList<PokemonInfo | string>
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: true,
				})}
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={styles.container}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				bounces={false}
				data={['left', ...pokemons, 'right']}
				keyExtractor={(item) => (typeof item === 'string' ? item : item.number)}
				renderItem={({ item, index }) => {
					if (typeof item === 'string') {
						console.log(item)
						return <View style={styles.spacer} />
					}

					const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE]
					const translateY = scrollX.interpolate({
						inputRange,
						outputRange: [10, -50, 10],
					})
					const scale = scrollX.interpolate({
						inputRange,
						outputRange: [1, 1.25, 1],
					})
					return (
						<Animated.View style={{ transform: [{ translateY }, { scale }] }}>
							<PokemonCard pokemon={item} />
						</Animated.View>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	spacer: {
		width: ITEM_SIZE / 2,
	},
	list: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		alignItems: 'center',
	},
})

export default PokemonList
