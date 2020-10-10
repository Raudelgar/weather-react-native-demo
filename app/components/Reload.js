import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import palette from '../utils/palette';

const Reload = ({ load }) => {
	return (
		<View style={styles.reloadContainer}>
			<TouchableOpacity>
				<MaterialCommunityIcons
					name='reload'
					size={28}
					color={palette.white}
					onPress={load}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	reloadContainer: {
		position: 'absolute',
		top: 50,
		right: 50,
	},
});

export default Reload;
