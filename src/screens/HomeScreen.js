// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, FlatList, ScrollView } from 'react-native';
// import WeatherCard from '../components/WeatherCard';
// import { fetchWeatherData } from '../api/WeatherService';
// import ForecastCard from '../components/ForecastCard';

// const HomeScreen = ({ navigation }) => {
//     const [city, setCity] = useState('');
//     // const [weatherData, setWeatherData] = useState(null);
//     const [weatherData, setWeatherData] = useState({ list: [] });
//     const [error, setError] = useState(null);

//     const handleSearch = async () => {
//         Keyboard.dismiss(); // Dismiss the keyboard
//         if (!city.trim()) {
//             setError('Please enter a city name.');
//             return;
//         }
//         setError(null);
//         try {
//             const data = await fetchWeatherData(city.trim());
//             setWeatherData(data);
//             setCity(''); // Clear the search bar
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const getDailyForecast = (list) => {
//         return list.filter((item) => {
//             const date = new Date(item.dt_txt);
//             return date.getHours() === 12;
//         });
//     };

//     const processForecastData = (data) => {
//         // Ensure we have the data and it has the list property
//         if (data && data.list) {
//             // Assuming the API returns data in 3-hour increments, and you want to show midday forecast
//             const dailyData = data.list.filter((_, index) => index % 8 === 4); // Selects approximately midday forecasts
//             return dailyData.slice(0, 5); // Limit to 5 days
//         }
//         return []; // Return an empty array if data is not available
//     };

//     const renderForecastCards = () => {
//         const dailyForecast = processForecastData(weatherData);

//         return dailyForecast.length > 0 ? (
//             dailyForecast.map((day, index) => <ForecastCard key={index} forecast={day} />)
//         ) : (
//             <Text>No forecast data available</Text>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.searchInput}
//                 placeholder="Enter City Name"
//                 value={city}
//                 onChangeText={(text) => setCity(text)}
//                 onSubmitEditing={handleSearch}
//             />
//             <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//                 <Text style={styles.searchButtonText}>Search</Text>
//             </TouchableOpacity>
//             {error && <Text style={styles.errorText}>{error}</Text>}
//             {weatherData && <WeatherCard data={weatherData} />}
//             <FlatList
//                 data={weatherData ? getDailyForecast(weatherData.list) : []}
//                 renderItem={({ item }) => <ForecastCard forecast={item} />}
//                 keyExtractor={(item) => item.dt_txt}
//                 horizontal={false}
//                 showsVerticalScrollIndicator={false}
//             />
//             <ScrollView style={styles.forecastContainer}>
//                 {renderForecastCards()}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//         backgroundColor: '#EFEFEF',
//     },
//     searchInput: {
//         width: '100%',
//         height: 40,
//         borderColor: '#CCCCCC',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingLeft: 10,
//         marginBottom: 20,
//     },
//     searchButton: {
//         backgroundColor: '#1E88E5',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     searchButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//     },
//     errorText: {
//         color: 'red',
//         marginBottom: 20,
//     },
// });

// export default HomeScreen;






import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../api/WeatherService';

const HomeScreen = ({ navigation }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        Keyboard.dismiss();
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

