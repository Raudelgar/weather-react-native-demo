import React from 'react';
import { Picker } from '@react-native-community/picker';
import { StyleSheet, Platform } from 'react-native';

import palette from '../utils/palette';

const UnitsPicker = ({ selected, pickerUnit }) => {
	return (
		<Picker
			style={styles.pickerContainer}
			selectedValue={selected}
			onValueChange={(itemValue, itemIndex) => pickerUnit(itemValue)}
			mode='dropdown'
			itemStyle={pickerItem}
			itemTextStyle={{ color: palette.white }}
		>
			<Picker.Item label='°F' value='imperial' />
			<Picker.Item label='°C' value='metric' />
		</Picker>
	);
};

const pickerItem = {
	backgroundColor: palette.primary,
	// height: 45,
	height: 120,
	color: palette.white,
	fontSize: 24,
	fontWeight: '600',
	// fill: palette.white,
};

const styles = StyleSheet.create({
	pickerContainer: {
		height: 50,
		width: 100,
		position: 'absolute',
		color: palette.white,
		fontSize: 24,
		fontWeight: '600',
		justifyContent: 'center',
		...Platform.select({
			ios: {
				// bottom: 80,
				top: 50,
				left: 20,
			},
			android: {
				// bottom: 30,
				top: 40,
				left: 20,
			},
		}),
	},
});
export default UnitsPicker;
