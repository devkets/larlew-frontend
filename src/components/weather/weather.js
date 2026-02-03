import React, { useState, useEffect } from "react";
import '../../styles/weather.css';

const Weather = () => {
  const [city, setCity] = useState("Sandy");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1f80b0799fe7be80729c030942c94be&units=imperial`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  }

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  } 

  return (
    <div className="weather">
        <form onSubmit={handleSubmit}>
            <label htmlFor="city">City:</label>
            <input 
                type="text" 
                id="city" 
                name="city" 
                value={city} 
                onChange={handleCityChange} 
            />
            <button type="submit">Get Weather</button>
        </form>
        <h2>{weatherData.name}</h2>
        {weatherData.weather && <p>{weatherData.weather[0].description}</p>}
        <p>Temperature: {weatherData.main?.temp} F</p>
        <p>Humidity: {weatherData.main?.humidity} %</p>
        <p>Feels like: {weatherData.main?.feels_like} F</p>    
    </div>
  );
};

export default Weather; 