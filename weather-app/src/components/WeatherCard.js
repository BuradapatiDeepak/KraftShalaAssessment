import React from 'react';
import '../WeatherCard.css'; // Ensure you have the correct CSS file imported

const WeatherCard = ({ location, removeLocation }) => {
    const { name, country, weather } = location;

    const handleRemoveClick = () => {
        removeLocation(name); // Call removeLocation function with the location name
    };

    return (
        <div className="weather-card">
            <button className="cancel-button" onClick={handleRemoveClick}>
                &#x2715;
            </button>
            <h3>{name}, {country}</h3>
            <p>Temperature: {weather.temp_c}°C / {weather.temp_f}°F</p>
            <p>Condition: {weather.condition.text}</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.wind_kph} kph / {weather.wind_mph} mph</p>
        </div>
    );
};

export default WeatherCard;