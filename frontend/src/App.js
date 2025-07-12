import React, { useState } from "react";
import MapAlbania from "./components/MapAlbania";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from './api'; 

const cityIdToName = {
  tirane: "Tirana",
  durres: "Durres",
  shkoder: "Shkoder",
  kukes:"Kukes",
  lezhe:"Lezhe",
  diber:"Diber",
  elbasan:"Elbasan",
  berat:"Berat",
  fier:"Fier",
  vlore:"Vlore",
  gjirokaster:"Gjirokaster",
  korce:"Korce"
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

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        display: "flex",
        gap: "40px",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ flex: "0 0 600px", border: "1px solid #ccc" }}>
        <MapAlbania onSelectCity={handleSelectCity} />
      </div>

      <div style={{ flex: "1 1 400px" }}>
        {loading && <p>Duke marrë të dhënat...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
        {!weather && !loading && <p>Zgjidh një qytet nga harta për të parë motin.</p>}
      </div>
    </div>
  );
}

export default App;
