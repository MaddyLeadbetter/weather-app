import React from 'react';
import logo from './sun.svg';
import './App.css';
import WeeklyWeatherComponent from './WeeklyWeather/WeeklyWeather';

function App() {
  return (
    <div className="App">
      <div className="body">
        <img src={logo} className="App-logo" alt="logo" />
        <WeeklyWeatherComponent />
      </div>
    </div>
  );
}

export default App;
