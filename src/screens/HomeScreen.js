import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../api/WeatherService';

const HomeScreen = ({ navigation }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        Keyboard.dismiss(); // Dismiss the keyboard
        if (!city.trim()) {
            setError('Please enter a city name.');
            return;
        }
        setError(null);
        try {
            const data = await fetchWeatherData(city.trim());
            setWeatherData(data);
            setCity(''); // Clear the search bar
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Enter City Name"
                value={city}
                onChangeText={(text) => setCity(text)}
                onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {weatherData && <WeatherCard data={weatherData} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#EFEFEF',
    },
    searchInput: {
        width: '100%',
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    searchButton: {
        backgroundColor: '#1E88E5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    searchButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
});

export default HomeScreen;
