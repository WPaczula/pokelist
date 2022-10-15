import React from 'react'
import { TextInput, StyleSheet, TextStyle } from 'react-native'

interface Props {
	onChange: (value: string) => void
	value: string
	style?: TextStyle
	onSave: () => void
	onFocus?: () => void
	onBlur?: () => void
}

const Input = ({ value, onChange, onFocus = () => {}, onBlur = () => {}, style, onSave }: Props) => {
	const handleBlur = () => {
		onSave()
		onBlur()
	}

	return (
		<TextInput
			onFocus={onFocus}
			onBlur={handleBlur}
			onEndEditing={handleBlur}
			style={[styles.input, style]}
			value={value}
			onChangeText={onChange}
			placeholder="Search by name or number..."
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		borderColor: '#eee',
		borderWidth: 1,
		backgroundColor: 'white',
		borderRadius: 10,
		paddingHorizontal: 25,
		paddingVertical: 8,
		fontSize: 16,
		textAlign: 'center',
	},
})

export default Input
