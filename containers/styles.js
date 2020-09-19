import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	containerVertical: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
	},
	containerHorizontal: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'row',
	},
	center: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	start: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	end: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
});

export default styles;
