import React, { useState } from 'react';

const WeatherForm = ({ getWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city) {
            getWeather(city); // Call getWeather function passed from props
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
