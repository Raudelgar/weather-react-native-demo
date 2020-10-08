import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

import WeatherScreen from './WeatherScreen';
import ErrorScreen from './ErrorScreen';
import weatherApi from '../routes/api/weatherApi';
import env from '../utils/env';

const WTH_API_KEY = env.weather_api_key;
const BASE_URL = weatherApi.base_api_url;

const WeatherInfo = () => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [units, setUnits] = useState('imperial');

	const load = async () => {
		try {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Access to location is needed to run the app');
				return false;
			}
			const { latitude, longitude } = await (
				await Location.getCurrentPositionAsync()
			).coords;
			console.log(`Latitued: ${latitude} and Longitud: ${longitude}`);
			const response = await axios.get(BASE_URL, {
				params: {
					appid: WTH_API_KEY,
					lat: latitude,
					lon: longitude,
					units: units,
				},
			});
			setCurrentWeather(response.data);
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	useEffect(() => {
		load();
	}, []);
	if (errorMsg) {
		return <ErrorScreen error={errorMsg} />;
	}

	return <WeatherScreen currentWeather={currentWeather} units={units} />;
};

export default WeatherInfo;
