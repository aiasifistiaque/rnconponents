import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { margin } from '../constants';
import { Content } from '../contents/Structure';

export function Button(props) {
	const borderRadius = shape => {
		if (shape == 'square') return 'none';
		else if (shape == 'round') return '50%';
		else if (shape == 'rounded') return 5;
	};
	const customStyle = {
		backgroundColor: props.bg || 'slateblue',
		width: props.block ? '100%' : 120,
		boxSizing: 'border-box',
		borderRadius: borderRadius(props.shape || 'rounded'),
	};
	const btnText = {
		color: props.color || 'black',
		textTransform: 'uppercase',
	};
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[styles.btn, customStyle, props.style]}>
			<Text style={btnText}>{props.children}</Text>
		</TouchableOpacity>
	);
}

export function OutlinedButton(props) {
	const borderRadius = () => {
		if (props.shape == 'square') return 'none';
		else if (props.shape == 'round') return '50%';
		else return 5;
	};
	const customStyle = {
		backgroundColor: 'transparent',
		width: props.block ? '100%' : 120,
		boxSizing: 'border-box',
		borderColor: props.color || black,
		borderWidth: 1,
		borderRadius: borderRadius(),
	};
	const btnText = {
		color: props.color || 'black',
		textTransform: 'uppercase',
	};
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[styles.btn, customStyle, props.style]}>
			<Text style={btnText}>{props.children}</Text>
		</TouchableOpacity>
	);
}

export function Link(props) {
	const btnText = {
		color: props.color || 'dodgerblue',
		textDecorationLine: props.underline ? 'underline' : 'none',
	};
	return (
		<TouchableOpacity onPress={props.onPress} style={{ padding: margin.small }}>
			<Content style={btnText}>{props.children}</Content>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		margin: 10,
	},
	btnText: {
		color: 'white',
		textTransform: 'capitalize',
	},
});
