const API_KEY = 'your_api_key';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

// const fetchWeatherData = async (city) => {
//     try {
//         const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         // exitconsole.log(response);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching weather data: ', error);
//         throw error;
//     }
// };

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&cnt=5`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        throw error;
    }
};

export { fetchWeatherData };
