import React, { useState } from "react";
import { fetchWeatherData } from "../api/weather";
const difKelvin = 273.15;
const SearchForm = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetchWeatherData(city, setWeatherData); // Llama a la API con la ciudad
    } catch (err) {
      setError("No se pudo obtener el clima. Intenta nuevamente.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una ciudad"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Buscar</button>
      </form>

      {weatherData && (
        <div className="weather-card">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            La temperatura actual es{" "}
            {Math.floor(weatherData.main.temp - difKelvin)}ºC
          </p>
          <p>
            La condición meteorológica actual:{" "}
            {weatherData.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default SearchForm;
