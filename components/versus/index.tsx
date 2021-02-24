import { Type } from '@declarations/types'
import usePrevious from '@hooks/usePrevious'
import { mapTypeToIcon } from '@utils/image'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, Animated } from 'react-native'

interface Props {
	resistant: Type[]
	weaknesses: Type[]
}

interface EntryProps {
	types: Type[]
	title: string
}
const Entry = ({ types, title }: EntryProps) => {
	return null

	const [currentTypes, setCurrentTypes] = useState(types)

	const fadeAnim = useRef(new Animated.Value(1)).current
	useEffect(() => {
		Animated.timing(fadeAnim, { toValue: 0, duration: 175, useNativeDriver: true })
		const timeout = setTimeout(() => {
			setCurrentTypes(types)
			Animated.timing(fadeAnim, { toValue: 1, duration: 175, useNativeDriver: true })
		}, 175)

		return () => clearTimeout(timeout)
	}, [types])

	return (
		<View style={styles.entry}>
			<Text style={styles.text}>{title}</Text>
			<Animated.View style={{ ...styles.iconsContainer, opacity: fadeAnim }}>
				{currentTypes.map((t) => (
					<Image source={mapTypeToIcon(t)} key={t} style={styles.icon} />
				))}
			</Animated.View>
		</View>
	)
}

const Versus = ({ resistant, weaknesses }: Props) => {
	return (
		<View style={styles.versusContainer}>
			<Entry title="weak" types={weaknesses} />
			<Entry title="resistant" types={resistant} />
		</View>
	)
}

const styles = StyleSheet.create({
	versusContainer: {
		padding: 16,
		width: '80%',
		marginBottom: 8,
	},
	entry: {
		marginBottom: 8,
	},
	text: {
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: 5,
		fontSize: 16,
		color: '#aaa',
	},
	iconsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 28,
	},
	icon: {
		height: 25,
		width: 25,
		margin: 3,
	},
})

export default Versus
