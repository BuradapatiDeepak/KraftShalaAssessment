import React from 'react';
import '../WeatherResult.css'; // Ensure you have WeatherResult.css for styling

const WeatherResult = ({ data, onRemove }) => {
    if (!data) return null; // Handle case where data is not available

    const { name, country, weather } = data;

    const getWeatherImage = (condition) => {
        const conditionLower = condition.toLowerCase();
        if (conditionLower.includes("rain")) {
            return "https://thumbs.dreamstime.com/b/cute-girl-friends-red-umbrella-rainy-season-illustration-57235572.jpg";
        } else if (conditionLower.includes("sunny")) {
            return "https://thumbs.dreamstime.com/b/bright-sunny-day-park-sun-rays-illuminate-green-grass-trees-bright-sunny-day-park-sun-rays-illuminate-green-103361648.jpg";
        } else if (conditionLower.includes("cloudy")) {
            return "https://img.freepik.com/premium-vector/cloudy-weather-cartoon_543090-877.jpg";
        } else if (conditionLower.includes("windy")) {
            return "https://t4.ftcdn.net/jpg/01/89/08/55/360_F_189085579_gTQZGQ3Fy3cI5egqLfjB1kgtd0DWsntP.jpg";
        } else if (conditionLower.includes("mist")) {
            return "https://media.arubanetworks.com/blogs/GettyImages-1164051562.jpg";
        } else {
            return "https://media.newyorker.com/photos/5d0aa326e140834842c67f62/4:3/w_2559,h_1919,c_limit/190701_r34545.jpg";
        }
    };

    const weatherImage = getWeatherImage(weather.condition.text);
    const dateTime = new Date().toLocaleString();

    const handleRemove = () => {
        onRemove(name); // Call the parent component's remove function with location name
    };

    return (
        <div className="weather-card">
            <div className="cancel-button">
                
            <button  onClick={handleRemove}>
                x
            </button>
            </div>
            <h3>{name}, {country}</h3>
            <p>Temperature: {weather.temp_c}°C / {weather.temp_f}°F</p>
            <p>Condition: {weather.condition.text}</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.wind_kph} kph / {weather.wind_mph} mph</p>
            <p>Date and Time: {dateTime}</p>
            <img src={weatherImage} alt="Weather" width="300" height="200" />
        </div>
    );
};

export default WeatherResult;
