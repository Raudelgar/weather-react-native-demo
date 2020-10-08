import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar as StatusBarNative,
} from 'react-native';

const ErrorScreen = ({ error }) => {
	if (error === null) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Text>{error}</Text>
			<StatusBar style='auto' />
			<StatusBarNative animated={true} barStyle='dark-content' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ErrorScreen;
