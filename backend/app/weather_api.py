import requests
import os

def get_weather(city):
    api_key = os.getenv("WEATHERAPI_API_KEY")
    print("DEBUG API KEY:", api_key)
    if not api_key:
        return {"error": "API key not found"}

    url = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}&aqi=no"

    try:
        response = requests.get(url)
        print("DEBUG RESPONSE:", response.status_code, response.text)
        data = response.json()

        if response.status_code != 200:
            return {"error": data.get("error", {}).get("message", "Weather API error")}

        current = data["current"]
        location = data["location"]

        return {
            "city": location["name"],
            "temperature": current["temp_c"],
            "humidity": current["humidity"],
            "description": current["condition"]["text"],
            "icon": current["condition"]["icon"]
        }

    except Exception as e:
        return {"error": str(e)}
