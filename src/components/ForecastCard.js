import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ForecastCard = ({ forecast }) => {
    const date = new Date(forecast.dt * 1000);
    const imageUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

    return (
        <View style={styles.card}>
            <Text style={styles.date}>{date.toDateString()}</Text>
            <Image source={{ uri: imageUrl }} style={styles.icon} />
            <Text style={styles.temp}>{`${Math.round(forecast.main.temp)}°C`}</Text>
            <Text style={styles.description}>{forecast.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        width: 50,
        height: 50,
    },
    temp: {
        fontSize: 22,
    },
    description: {
        fontSize: 16,
    },
});

export default ForecastCard;
