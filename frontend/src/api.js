export async function fetchWeather(city) {
  console.log(`Fetching weather for ${city}`);

  try {
    const response = await fetch(`http://localhost:5000/weather?city=${city}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Weather data:", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
