import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { margin, color } from '../constants';
import PropertyPage from '../../../pages/PropertyPage';

export function Content(props) {
	const style = {
		color: props.color || 'black',
		margin: props.margin ? margin.small : 0,
		fontSize: props.size || 15,
	};
	return <Text style={[style, props.style]}>{props.children}</Text>;
}

export function CustomImage(props) {
	return (
		<Image
			source={props.src}
			style={{ width: '100%', height: 300, resizeMode: 'cover' }}
		/>
	);
}

const styles = StyleSheet.create({
	textBlack: {
		color: 'black',
		margin: margin.large,
	},
});
