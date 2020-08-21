import React, { useState, useEffect } from 'react';
import { getForecast } from '../../utils/forecast-fetch';
import Dropdown from '../Dropdown/Dropdown';
import sunLogo from '../../sun.svg';
import moonLogo from '../../moon.svg';
import { options } from '../../constants';
import './Weather.css';


const WeatherComponent = () => {
    let [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        console.log('Getting forecast');
        getForecast(setWeatherData, options[0].value);
    }, []);

    const onChange = (result) => {
        getForecast(setWeatherData, result.value);
    }

    const getLocation = () => {
        if (!weatherData.location) return;
        const selection = options.find(elem => elem.value === weatherData.location.name);
        return selection.label;
    }

    const isDay = weatherData.current && (weatherData.current.is_day === 'yes');

    const getCondition = () => {
        if (!weatherData.current || !weatherData.current.weather_descriptions) return 'Cloudy';
        const conditions = weatherData.current.weather_descriptions.toString().toLowerCase();
        console.log('CONDITIONS!', conditions);
        if (conditions.includes('cloudy') || conditions.includes('rain')) return 'Cloudy';
        if (conditions.includes('sunny')) return 'Sunny';
        if (conditions.includes('haze') || conditions.includes('fog') || conditions.includes('smoke')) return 'Hazy';
    }

    return (
        <div className={`forecast ${getCondition()} ${isDay ? 'Day' : 'Night'}`}>
        <img src={isDay ? sunLogo : moonLogo} className="App-logo" alt="logo" />
            <Dropdown options={options} onChange={onChange}/>
            <div className="info">
                <h1>{getLocation()}</h1>
                { weatherData.current &&
                    <div className="inner-info">
                        <p>Temperature: {weatherData.current.temperature}</p>
                        <p>Humidity: {weatherData.current.humidity}</p>
                        <p>Precipitation: {weatherData.current.precip} mm</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default WeatherComponent;