import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar as StatusBarNative,
	Image,
	Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import palette from '../utils/palette';
import weatherApi from '../routes/api/weatherApi';
import UnitsPicker from '../components/UnitsPicker';
import WeatherDetails from '../components/WeatherDetails';
// temperature-celsius
const WeatherScreen = ({ currentWeather, units, pickerUnit }) => {
	if (currentWeather !== null) {
		const {
			main: { temp },
			weather: [details],
			name,
		} = currentWeather;
		const { icon, description, main } = details;
		return (
			<>
				<UnitsPicker selected={units} pickerUnit={pickerUnit} />
				<View style={styles.whInfo}>
					<Text style={styles.whText}>{name}</Text>
					<Image
						source={{ uri: `${weatherApi.icon_api_url}/${icon}@4x.png` }}
						style={styles.icon}
					/>
					<Text style={styles.whText}>{main}</Text>
					<Text style={styles.whText}>{description}</Text>
					<Text style={[styles.whText, styles.tempText]}>
						{temp}
						<MaterialCommunityIcons
							name={
								units === 'imperial'
									? 'temperature-fahrenheit'
									: 'temperature-celsius'
							}
							size={24}
							color={palette.white}
						/>
					</Text>
					<WeatherDetails currentWeather={currentWeather} />
				</View>
				<StatusBar style='auto' />
				<StatusBarNative animated={true} barStyle='dark-content' />
			</>
		);
	}
	return null;
};

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	backgroundColor: palette.primary,
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	icon: {
		width: 200,
		height: 200,
		// resizeMode: 'contain',
	},
	whText: {
		color: palette.white,
		fontSize: 24,
		textTransform: 'capitalize',
		fontWeight: '500',
		fontFamily: Platform.OS === 'android' ? 'normal' : 'Damascus',
	},
	tempText: {
		fontSize: 30,
	},
	whInfo: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default WeatherScreen;
