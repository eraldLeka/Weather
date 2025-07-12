import React from "react";

function WeatherDisplay({ weather }) {
  if (!weather || !weather.city) return null;

  // Nëse ka ikonë, sigurohuni që ka protokoll (http/https)
  const iconUrl = weather.icon
    ? weather.icon.startsWith("http")
      ? weather.icon
      : `https:${weather.icon}`
    : null;

  return (
    <div>
      <h2>Weather in {weather.city}</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      {iconUrl && <img src={iconUrl} alt={weather.description} />}
    </div>
  );
}

export default WeatherDisplay;
