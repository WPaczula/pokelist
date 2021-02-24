import React, { useCallback, useRef } from 'react'
import { StyleSheet, View, StatusBar, Animated } from 'react-native'
import PokemonCard, { ITEM_SIZE } from '@components/pokemon-card'
import usePokemons from '@hooks/usePokemons'
import { PokemonInfo } from '@declarations/pokemon-info'
import Loading from '@components/loading'
import Backdrop from '@components/backdrop'
import Input from '@components/input'
import usePokemonSearch from './usePokemonSearch'
import { NavigationStackProp } from 'react-navigation-stack'
import { SharedElementsComponentConfig } from 'react-navigation-shared-element'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
	navigation: NavigationStackProp
}

const PokemonList = ({ navigation }: Props) => {
	const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
	const pokemons = usePokemons()

	const getItemLayout = (_: (string | PokemonInfo)[] | null | undefined, index: number) => ({
		length: ITEM_SIZE,
		offset: ITEM_SIZE * index,
		index,
	})

	const { searchText, setSearchText, listRef, onSearch } = usePokemonSearch(pokemons)

	if (!pokemons) {
		return <Loading />
	}

	const renderItem = useCallback(({ item, index }) => {
		if (typeof item === 'string') {
			return <View style={styles.spacer} />
		}

		const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE]
		const translateY = scrollX.interpolate({
			inputRange,
			outputRange: [180, 100, 180],
		})
		const scale = scrollX.interpolate({
			inputRange,
			outputRange: [0.9, 1.5, 0.9],
		})

		return (
			<Animated.View style={{ transform: [{ translateY }, { scale }] }}>
				<TouchableWithoutFeedback
					onPress={() => {
						navigation.navigate('Details', { item })
					}}
				>
					<PokemonCard pokemon={item} />
				</TouchableWithoutFeedback>
			</Animated.View>
		)
	}, [])

	return (
		<View style={styles.list}>
			<StatusBar hidden />
			<Backdrop types={pokemons.map((p) => p.types[0])} scrollX={scrollX} />
			<Animated.FlatList<PokemonInfo | string>
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: true,
				})}
				ref={listRef}
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
				removeClippedSubviews
				horizontal
				windowSize={6}
				contentContainerStyle={styles.container}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				getItemLayout={getItemLayout}
				bounces={false}
				data={['left', ...pokemons, 'right']}
				keyExtractor={(item) => (typeof item === 'string' ? item : item.number)}
				renderItem={renderItem}
			/>
			<Input
				value={searchText}
				onChange={setSearchText}
				onSave={onSearch}
				style={{
					width: '80%',
					marginBottom: '25%',
				}}
			/>
		</View>
	)
}

const sharedElements: SharedElementsComponentConfig = (navigation, otherNavigation, showing) => {
	return []
}
PokemonList.sharedElements = sharedElements

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
