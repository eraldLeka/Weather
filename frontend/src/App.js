import React, { useState } from "react";
import MapAlbania from "./components/MapAlbania";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./api";
import "./App.css";

const cityIdToName = {
  tirane: "Tirane",
  durres: "Durres",
  shkoder: "Shkoder",
  kukes: "Kukes",
  lezhe: "Lezhe",
  diber: "Diber",
  elbasan: "Elbasan",
  berat: "Berat",
  fier: "Fier",
  vlore: "Vlore",
  gjirokaster: "Gjirokaster",
  korce: "Korce",
};

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectCity = async (cityId) => {
    const cityName = cityIdToName[cityId];
    if (!cityName) {
      console.warn("Qyteti nuk u gjet për id:", cityId);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
    } catch (err) {
      setError("Ndodhi një gabim gjatë marrjes së të dhënave të motit.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getBackgroundClass = () => {
    if (!weather) return "";

    const desc = weather.description.toLowerCase();

    if (desc.includes("sunny") || desc.includes("clear")) return "background-sunny";
    if (desc.includes("cloud")) return "background-cloudy";
    if (desc.includes("rain") || desc.includes("drizzle")) return "background-rain";
    if (desc.includes("snow")) return "background-snow";
    if (desc.includes("thunder")) return "background-thunderstorm";
    if (desc.includes("fog") || desc.includes("mist")) return "background-fog";

    return "";
  };

  const isLightText = weather && ["background-cloudy", "background-rain", "background-thunderstorm", "background-fog"].includes(getBackgroundClass());

  return (
    <div
      className={getBackgroundClass()}
      style={{
        padding: "30px",
        display: "flex",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        transition: "background 0.5s ease",
      }}
    >
      <div style={{ flex: "0 0 600px" }}>
        <MapAlbania onSelectCity={handleSelectCity} />
      </div>

      <div
        style={{
          flex: "1 1 400px",
          color: isLightText ? "#fff" : "#333",
          backgroundColor: isLightText ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: isLightText ? "0 4px 12px rgba(0,0,0,0.7)" : "0 4px 12px rgba(0,0,0,0.15)",
          maxWidth: "400px",
        }}
      >
        {loading && <p>Getting weather data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
        {!weather && !loading && <p>Choose a city.</p>}
      </div>
    </div>
  );
}

export default App;
