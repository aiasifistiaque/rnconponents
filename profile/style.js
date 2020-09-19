import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'white',
		marginHorizontal: 15,
		marginTop: 10,
		marginBottom: 5,
		borderRadius: 10,
	},
	items: {
		fontSize: 16,
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '100%',
		color: 'rgba(0,0,0,.8)',
	},
	seperator: {
		borderWidth: 0.3,
		borderColor: 'whitesmoke',
		width: '100%',
		height: 1,
	},
	heading: {
		fontSize: 18,
		fontWeight: '500',
		paddingHorizontal: 14,
		marginTop: 20,
		color: 'rgba(0,0,0,.8)',
	},
});

export default styles;
