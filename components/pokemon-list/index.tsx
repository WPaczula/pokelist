import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Animated } from 'react-native'
import PokemonCard, { ITEM_SIZE } from '@components/pokemon-card'

const POKEMON_NUMBERS = Array(151)
	.fill(0)
	.map((_, index) => index + 1)

const PokemonList = () => {
	const scrollX = useRef(new Animated.Value(0)).current

	return (
		<View style={styles.list}>
			<StatusBar hidden />
			<Animated.FlatList<number | null>
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
				data={[null, ...POKEMON_NUMBERS, null]}
				keyExtractor={(item) => String(item)}
				renderItem={({ item }) => {
					if (item === null) {
						return <View style={styles.spacer} />
					}

					const inputRange = [(item - 2) * ITEM_SIZE, (item - 1) * ITEM_SIZE, item * ITEM_SIZE]
					const translateY = scrollX.interpolate({
						inputRange,
						outputRange: [0, -50, 0],
					})
					return (
						<Animated.View style={{ transform: [{ translateY }] }}>
							<PokemonCard number={item} />
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
