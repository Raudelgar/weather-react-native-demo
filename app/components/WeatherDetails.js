import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

import palette from '../utils/palette';

const WeatherDetails = ({ currentWeather }) => {
	const { main } = currentWeather;
	const { feels_like, temp_min, temp_max, pressure, humidity } = main;
	const { width: windowWidth } = useWindowDimensions();
	return (
		<View style={styles.detailsContainer(windowWidth)}>
			<View style={styles.detailView}>
				<Text style={[styles.detailText, styles.detailLabel]}>Feels Like</Text>
				<Text style={[styles.detailText, styles.detailValue]}>
					{feels_like}°
				</Text>
			</View>
			<View style={styles.detailsBorder} />
			<View style={styles.detailView}>
				<Text style={[styles.detailText, styles.detailLabel]}>
					Min Temperatue
				</Text>
				<Text style={[styles.detailText, styles.detailValue]}>{temp_min}°</Text>
			</View>
			<View style={styles.detailsBorder} />
			<View style={styles.detailView}>
				<Text style={[styles.detailText, styles.detailLabel]}>
					Max Temperatue
				</Text>
				<Text style={[styles.detailText, styles.detailValue]}>{temp_max}°</Text>
			</View>
			<View style={styles.detailsBorder} />
			<View style={styles.detailView}>
				<Text style={[styles.detailText, styles.detailLabel]}>Pressure</Text>
				<Text style={[styles.detailText, styles.detailValue]}>
					{pressure} inHg
				</Text>
			</View>
			<View style={styles.detailsBorder} />
			<View style={styles.detailView}>
				<Text style={[styles.detailText, styles.detailLabel]}>Humidity</Text>
				<Text style={[styles.detailText, styles.detailValue]}>{humidity}%</Text>
			</View>
			<View style={styles.detailsBorder} />
		</View>
	);
};

const styles = StyleSheet.create({
	detailsContainer: (currWidth) => ({
		marginTop: 20,
		width: currWidth,
		paddingRight: 15,
		paddingLeft: 15,
	}),
	detailView: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// marginBottom: 1,
		// paddingBottom: 5,
	},
	detailText: {
		color: palette.white,
		fontSize: 20,
		fontWeight: '500',
	},
	detailsBorder: {
		marginTop: 2,
		marginBottom: 2,
		borderBottomWidth: 1,
		borderColor: palette.gray,
	},
});

export default WeatherDetails;
