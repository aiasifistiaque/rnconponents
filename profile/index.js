import React from 'react';
import { View } from 'react-native';
import { Vertical } from '../containers/Structure';
import { Content } from '../contents/Structure';
import styles from './style';

export const ItemContainer = props => {
	return (
		<Vertical style={[styles.itemContainer, props.style]}>
			{props.children}
		</Vertical>
	);
};

export const Heading = props => {
	<Content style={[styles.heading, props.style]}>{props.children}</Content>;
};

export const Item = props => {
	<Content style={[styles.items, props.style]}>{props.children}</Content>;
};

export const Seperator = props => {
	return <View style={[styles.seperator, props.style]} />;
};
