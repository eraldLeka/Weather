import React from "react";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import "./WeatherDisplay.css";

function WeatherDisplay({ weather }) {
  if (!weather || !weather.city) return null;

  const iconUrl = weather.icon
    ? weather.icon.startsWith("http")
      ? weather.icon
      : `https:${weather.icon}`
    : null;

  return (
    <div className="weather-display">
      <h2 className="weather-title">Weather in {weather.city}</h2>

      {iconUrl && (
        <img
          className="weather-icon"
          src={iconUrl}
          alt={weather.description}
        />
      )}

      <p className="weather-info">
        <WiThermometer className="icon" />
        Temperature: <strong>{weather.temperature} °C</strong>
      </p>

      <p className="weather-info">
        <WiHumidity className="icon" />
        Humidity: <strong>{weather.humidity}%</strong>
      </p>

      <p className="weather-description">{weather.description}</p>
    </div>
  );
}

export default WeatherDisplay;
