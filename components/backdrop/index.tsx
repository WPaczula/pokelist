import { Type } from '@declarations/types'
import React from 'react'
import { View, StyleSheet, Dimensions, Image, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { mapTypeToImage } from '@utils/image'
import { FlatList } from 'react-native-gesture-handler'
import { ITEM_SIZE } from '@components/pokemon-card'

interface Props {
	types: Type[]
	scrollX: Animated.Value
}

const { width, height } = Dimensions.get('window')
const BACKDROP_HEIGHT = height * 0.6

const Backdrop = ({ types, scrollX }: Props) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={types}
				keyExtractor={(_, index) => String(index)}
				removeClippedSubviews={false}
				contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
				renderItem={({ item, index }) => {
					const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE]
					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0, 1],
					})

					return (
						<Animated.View
							removeClippedSubviews={false}
							style={{
								position: 'absolute',
								opacity,
								overflow: 'hidden',
								height: BACKDROP_HEIGHT,
								width,
							}}
						>
							<Image
								source={mapTypeToImage(item)}
								style={{
									width,
									height: BACKDROP_HEIGHT,
									position: 'absolute',
								}}
							/>
						</Animated.View>
					)
				}}
			></FlatList>
			<LinearGradient colors={['transparent', 'white']} style={styles.gradient} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		width,
		height: BACKDROP_HEIGHT,
	},
	gradient: { width, height: BACKDROP_HEIGHT, position: 'absolute', bottom: 0 },
})

export default Backdrop
