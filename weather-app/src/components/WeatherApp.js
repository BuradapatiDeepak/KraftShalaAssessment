import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';
import '../WeatherApp.css';

const WeatherApp = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const addLocation = async (cityName) => {
        const apiKey = "9e5fa3c0ec1a48778ee182359230607";
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Please Type the Location Correctly');
            }
            const data = await response.json();
            const newLocation = {
                name: data.location.name,
                country: data.location.country,
                weather: data.current,
            };
            setLocations([...locations, newLocation]);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const removeLocation = (locationName) => {
        const updatedLocations = locations.filter(loc => loc.name !== locationName);
        setLocations(updatedLocations);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <div className={`weather-app ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>Weather App</h1>
            <WeatherForm getWeather={addLocation} />
            {error && <p className="error">{error}</p>}
            <div className="weather-cards-container">
                {locations.map((location, index) => (
                    <WeatherResult key={`${location.name}-${location.country}`} data={location} onRemove={removeLocation} />
                ))}
            </div>
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
        </div>
    );
};

export default WeatherApp;
