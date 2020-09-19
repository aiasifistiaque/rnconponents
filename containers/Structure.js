import React from 'react';
import { View } from 'react-native';
import { useStyle } from '../hooks';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

//Basic Container Strucrure
const ContainerStructure = props => {
	const alignment = useStyle(props, {
		center: styles.center,
		left: styles.start,
		right: styles.end,
		default: styles.start,
	});

	const styleClass = [styles.container, props.style];

	return <View style={styleClass}>{props.children}</View>;
};

/**
 * this is a basic container
 */
export const Container = props => {
	return <ContainerStructure {...props} />;
};

/**
 * this is a container with vertical allignment
 */
export const Vertical = props => {
	const styleClass = [styles.containerVertical, props.style];
	return <View style={styleClass}>{props.children}</View>;
};

/**
 * this is a container with horizontal allignment
 */
export const Horizontal = props => {
	const styleClass = [styles.containerHorizontal, props.style];
	return <View style={styleClass}>{props.children}</View>;
};
