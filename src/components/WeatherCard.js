import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ data }) => {
    // Extracting the relevant data from the weatherData prop
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // URL for weather icon image
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    return (
        <View style={styles.card}>
            <Text style={styles.cityName}>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.temperature}>{`${temp}°`}</Text>
            <Text style={styles.details}>Humidity: {humidity}%</Text>
            <Text style={styles.details}>Wind Speed: {speed} m/s</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        elevation: 1, // for Android
        shadowOpacity: 0.1, // for iOS
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 20,
    },
    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    weatherDescription: {
        textTransform: 'capitalize',
        fontSize: 16,
        marginBottom: 10,
    },
    temperature: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default WeatherCard;
