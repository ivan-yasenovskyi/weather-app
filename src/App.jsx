import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = async (searchedCity) => {
    if (!searchedCity) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("City not found. Please check the spelling.");
      }

      const data = await response.json();
      const iconCode = data.weather[0].icon;

      setWeather({
        city: data.name,
        temp: `${Math.round(data.main.temp)}°`,
        description: data.weather[0].description,
        iconCode: iconCode,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <SearchBar onSearch={handleSearch} />

      <div className="mt-8 text-center">
        {loading && (
          <p className="text-white text-xl animate-pulse">Searching...</p>
        )}
        {error && <p className="text-red-400 text-xl font-medium">{error}</p>}

        {weather && !loading && !error && (
          <WeatherCard
            city={weather.city}
            temp={weather.temp}
            description={weather.description}
            iconCode={weather.iconCode}
          />
        )}
      </div>
    </div>
  );
};

export default App;
