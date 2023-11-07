import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { weatherData } = route.params;

    const { city, list } = weatherData;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>{weatherData.city} - Detailed Forecast</Text>
            {weatherData.list.map((item, index) => (
                <View key={index} style={styles.detailContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.date}>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
                        <Image
                            style={styles.icon}
                            source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }}
                        />
                    </View>
                    <Text style={styles.description}>{item.weather[0].description}</Text>
                    <View style={styles.tempContainer}>
                        <Text style={styles.temp}>Day: {item.temp.day}°C</Text>
                        <Text style={styles.temp}>Night: {item.temp.night}°C</Text>
                    </View>
                    <Text style={styles.details}>
                        Humidity: {item.humidity}% - Wind: {item.wind_speed} m/s
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
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        padding: 20,
        backgroundColor: '#FFF',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    detailContainer: {
        backgroundColor: '#FFF',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: 18,
        fontWeight: '500',
    },
    icon: {
        width: 50,
        height: 50,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
        marginBottom: 10,
    },
    tempContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    temp: {
        fontSize: 16,
        fontWeight: '500',
    },
    details: {
        fontSize: 14,
        color: '#555',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingTop: 10,
        marginTop: 10,
    },
});

export default DetailsScreen;
