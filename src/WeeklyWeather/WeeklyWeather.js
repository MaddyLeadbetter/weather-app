import React, { useState } from 'react';
import './WeeklyWeather.css';

const WeeklyWeatherComponent = () => {
    let [weatherData, setWeatherData] = useState({});

    function getForecast() {
        fetch(
            "http://api.weatherstack.com/current?access_key=07bf4836df25ad30d584209a6e5ab281&query=San%20Francisco&units=m",
            { "method": "GET" }
        )
        .then(response => response.json())
        .then(response => setWeatherData(response))
        .catch(err => {
            console.log(err);
        });
    }

    console.log('HEY', weatherData);

    return (
        <div className="forecast">
            {weatherData.location && weatherData.current &&
                <div className="info">
                    <h1>{weatherData.location.name}</h1>
                    <p>{weatherData.current.temperature}</p>
                </div>
            }
            
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
}

export default WeeklyWeatherComponent;