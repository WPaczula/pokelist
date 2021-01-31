import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Loading...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16,
	},
})

export default Loading
