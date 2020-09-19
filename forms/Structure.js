import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function Input(props) {
	return (
		<TextInput
			style={styles.input}
			onChangeText={props.onChangeText}
			value={props.value}
			placeholder={props.placeholder || null}
			textContentType={props.type || 'none'}
			secureTextEntry={props.type == 'password' ? true : false}
		/>
	);
}

export function Password(props) {
	return (
		<TextInput
			style={styles.input}
			onChangeText={props.onChangeText}
			value={props.value}
			placeholder={props.placeholder || null}
			textContentType='password'
			secureTextEntry={true}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: 'rgba(0,0,0,.2)',
		borderWidth: 1,
		borderRadius: 5,
		width: '100%',
		marginVertical: 10,
		padding: 10,
		color: 'rgba(0,0,0,.9)',
	},
});
