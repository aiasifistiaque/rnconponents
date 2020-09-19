import React from 'react';
import { View, Text, Image } from 'react-native';
import { color } from '../constants';
import { Button } from '../';

export function CardContainer(props) {
	return <View style={{ dislay: 'flex', flex: 1 }}>{props.children}</View>;
}

export function Card(props) {
	return (
		<View
			style={{
				display: 'flex',
				borderWidth: 1,
				borderColor: props.color || 'whitesmoke',
				backgroundColor: props.bg || 'white',
				//borderRadius: 10,
				paddingVertical: props.borderless ? 15 : 0,
				marginHorizontal: props.borderless ? 15 : 0,
				borderLeftColor: props.borderless ? 'transparent' : props.bg || 'white',
				borderRightColor: props.borderless
					? 'transparent'
					: props.bg || 'white',
				borderTopColor: props.borderless ? 'transparent' : props.bg || 'white',
				//borderRadius: 10,
			}}>
			{props.children}
		</View>
	);
}

export function CardBody(props) {
	return (
		<View
			style={{
				//paddingHorizontal: 10,
				paddingBottom: 10,
			}}>
			{props.children}
		</View>
	);
}

export function CardTitle(props) {
	return (
		<Text
			style={{
				color: props.color || color.dark,
				fontSize: props.size || 16,
				marginVertical: 5,
				fontWeight: 'bold',
			}}>
			{props.children}
		</Text>
	);
}

export function CardSubtitle(props) {
	return (
		<Text
			style={{
				color: props.color || 'rgba(0,0,0,.6)',
				fontSize: props.size || 14,
				marginBottom: 5,
				fontWeight: 'bold',
			}}>
			{props.children}
		</Text>
	);
}

export function CardText(props) {
	return (
		<Text
			style={{
				color: props.color || color.dark,
				fontSize: props.size || 14,
			}}>
			{props.children}
		</Text>
	);
}

export function CardButton(props) {
	return <Button style={{}}>{props.children}</Button>;
}

export function CardImage(props) {
	return (
		<Image
			source={props.src}
			style={{
				width: '100%',
				height: 150,
				resizeMode: 'cover',
				borderRadius: props.rounded ? 5 : 0,
				marginBottom: 5,
			}}
		/>
	);
}
