import 'react-native-gesture-handler'
import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import PokemonList from '@screens/pokemon-list'
import PokemonDetails from '@screens/pokemon-details'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

const queryClient = new QueryClient()

const Stack = createSharedElementStackNavigator({})

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white' } }}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen component={PokemonList} name={'List'} />
					<Stack.Screen component={PokemonDetails} name={'Details'} />
				</Stack.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
	)
}
