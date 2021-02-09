import React from 'react'
import { View, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { SharedElementsComponentConfig } from 'react-navigation-shared-element'

interface Props {
	navigation: NavigationStackProp
	route: any
}

const PokemonDetails = (props: Props) => {
	return (
		<View>
			<Text>HELLLOOOOO</Text>
		</View>
	)
}

const sharedElements: SharedElementsComponentConfig = (navigation, otherNavigation, showing) => {
	return []
}
PokemonDetails.sharedElements = sharedElements

export default PokemonDetails
