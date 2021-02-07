import React, { RefObject, useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, Animated, Alert, Dimensions } from 'react-native'
import PokemonCard, { ITEM_SIZE } from '@components/pokemon-card'
import usePokemons from '@hooks/usePokemons'
import { PokemonInfo } from '@declarations/pokemon-info'
import Loading from '@components/loading'
import Backdrop from '@components/backdrop'
import Input from '@components/input'

const PokemonList = () => {
	const [text, setText] = useState('')
	const ref = useRef<any>()

	const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
	const pokemons = usePokemons()

	const getItemLayout = (_: (string | PokemonInfo)[] | null | undefined, index: number) => ({
		length: ITEM_SIZE,
		offset: ITEM_SIZE * index,
		index,
	})

	const scrollToPokemon = () => {
		const pokemonIndex = pokemons?.findIndex(
			(p) => p.name.toLowerCase().includes(text.toLowerCase()) || p.number.includes(text)
		)

		if (pokemonIndex === -1 || text === '') {
			Alert.prompt('No pokemon found')
			return
		}

		ref.current.scrollToIndex({ index: pokemonIndex, animated: true })
	}

	if (!pokemons) {
		return <Loading />
	}

	return (
		<View style={styles.list}>
			<StatusBar hidden />
			<Backdrop types={pokemons.map((p) => p.types[0])} scrollX={scrollX} />
			<Animated.FlatList<PokemonInfo | string>
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: true,
				})}
				ref={ref}
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={styles.container}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				getItemLayout={getItemLayout}
				bounces={false}
				data={['left', ...pokemons, 'right']}
				keyExtractor={(item) => (typeof item === 'string' ? item : item.number)}
				renderItem={({ item, index }) => {
					if (typeof item === 'string') {
						return <View style={styles.spacer} />
					}

					const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE]
					const translateY = scrollX.interpolate({
						inputRange,
						outputRange: [100, 50, 100],
					})
					const scale = scrollX.interpolate({
						inputRange,
						outputRange: [0.9, 1.5, 0.9],
					})

					return (
						<Animated.View style={{ transform: [{ translateY }, { scale }] }}>
							<PokemonCard pokemon={item} />
						</Animated.View>
					)
				}}
			/>
			<Input
				value={text}
				onChange={setText}
				onSave={scrollToPokemon}
				style={{
					width: '80%',
					marginBottom: '25%',
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
		position: 'relative',
	},
	container: {
		alignItems: 'center',
	},
})

export default PokemonList
