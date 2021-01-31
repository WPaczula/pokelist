import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import usePokemons from '@hooks/usePokemons'
import Loading from '@components/loading'

export default function App() {
	const { loading, pokemons } = usePokemons()

	if (loading) {
		return <Loading />
	}

	return <View style={styles.container}>{!loading && pokemons.map((p) => <Text key={p.number}>{p.name}</Text>)}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
