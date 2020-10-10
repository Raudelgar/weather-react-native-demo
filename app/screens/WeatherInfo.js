import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import { WEATHER_API_KEY } from 'react-native-dotenv';
import WeatherScreen from './WeatherScreen';
import ErrorScreen from './ErrorScreen';
import weatherApi from '../routes/api/weatherApi';
import palette from '../utils/palette';
import Reload from '../components/Reload';

const BASE_URL = weatherApi.base_api_url;

const WeatherInfo = () => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [units, setUnits] = useState('imperial');

	const handleWaetherRequest = async () => {
		const { latitude, longitude } = await (
			await Location.getCurrentPositionAsync()
		).coords;
		// console.log(`Latitued: ${latitude} and Longitud: ${longitude}`);
		// console.log('units', units);
		const response = await axios.get(BASE_URL, {
			params: {
				appid: WEATHER_API_KEY,
				lat: latitude,
				lon: longitude,
				units: units,
			},
		});
		// console.log(response.data);
		setCurrentWeather(response.data);
	};

	const load = async () => {
		setCurrentWeather(null);
		setErrorMsg(null);
		try {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Access to location is needed to run the app');
				return false;
			}
			handleWaetherRequest();
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	const handleUnitsPicker = (value) => setUnits(value);

	useEffect(() => {
		load();
	}, [units]);

	if (errorMsg) {
		return (
			<View style={styles.container}>
				<Reload load={load} />
				<ErrorScreen error={errorMsg} />
			</View>
		);
	} else if (currentWeather) {
		return (
			<View style={styles.container}>
				<Reload load={load} />
				<WeatherScreen
					currentWeather={currentWeather}
					units={units}
					pickerUnit={handleUnitsPicker}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color={palette.white} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default WeatherInfo;
