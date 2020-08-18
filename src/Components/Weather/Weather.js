import React, { useState, useEffect } from 'react';
import './Weather.css';
import { getForecast } from '../../utils/forecast-fetch';
import Dropdown from '../Dropdown/Dropdown';
import sunLogo from '../../sun.svg';
import moonLogo from '../../moon.svg';

const options = [
    { value: 'San Francisco', label: 'Vaurum' },
    { value: 'Yellowknife', label: 'Frosthall' },
    { value: 'Hawaii', label: 'Midgulf' },
    { value: 'Brantford', label: 'Dewspell' },
    { value: 'Galapagos', label: 'Galapga' },
    { value: 'Winnipeg', label: 'Uslian' },
    { value: 'Vancouver', label: 'Deepfort' },
    { value: 'Tokyo', label: 'Faehills' },
    { value: 'Calgary', label: 'Argenherst' },
    { value: 'Moscow', label: 'Tiberalt' },
    { value: 'Nuuk', label: 'Ice Helm' },
    { value: 'Maui', label: 'Stormpost' },
    { value: 'Texas', label: 'Farford' },
    { value: 'New Orleans', label: 'Amberharbour' },
    { value: 'Buffalo', label: 'Harbrau' },
    { value: 'Bahamas', label: 'Archae' },
    { value: 'Denver', label: 'Lastbreach' },
]

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

    const getLogo = (weatherData.current && !weatherData.current.is_day) ? moonLogo : sunLogo;

    return (
        <div className="forecast">
        <img src={getLogo} className="App-logo" alt="logo" />
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