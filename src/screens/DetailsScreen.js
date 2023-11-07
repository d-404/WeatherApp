import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { weatherData } = route.params;

    // You would extract more detailed information from weatherData here.
    // For simplicity, let's just show the city name and detailed forecast information.
    const { city, list } = weatherData; // assuming weatherData has these fields

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>{city} - Detailed Forecast</Text>
            {list.map((item, index) => (
                <View key={index} style={styles.detailContainer}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.description}>{item.weather[0].description}</Text>
                    <Text style={styles.temp}>Day: {item.temp.day}°C</Text>
                    <Text style={styles.temp}>Night: {item.temp.night}°C</Text>
                    <Text style={styles.details}>
                        Humidity: {item.humidity}% - Wind: {item.wind.speed}m/s
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    },
    detailContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginVertical: 4,
    },
    temp: {
        fontSize: 16,
        fontWeight: '500',
    },
    details: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});

export default DetailsScreen;
