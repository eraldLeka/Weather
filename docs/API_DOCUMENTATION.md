# Weather API Documentation

## Overview

The Weather API is a Flask-based REST API that provides weather information for Albanian cities. It integrates with the WeatherAPI.com service to fetch real-time weather data.

## Base URL

```
http://localhost:5000
```

## Authentication

The API uses WeatherAPI.com service which requires an API key configured as an environment variable `WEATHERAPI_API_KEY`.

## Endpoints

### 1. Health Check

**GET** `/health`

Returns the API health status.

#### Response

**Success (200 OK)**
```json
{
  "status": "ok"
}
```

#### Example

```bash
curl -X GET http://localhost:5000/health
```

### 2. Home

**GET** `/`

Returns a welcome message for the API.

#### Response

**Success (200 OK)**
```json
{
  "message": "Welcome to the Weather API!"
}
```

#### Example

```bash
curl -X GET http://localhost:5000/
```

### 3. Get Weather

**GET** `/weather`

Retrieves current weather information for a specified city.

#### Parameters

| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| city      | string | Yes      | Name of the city to get weather for |

#### Response

**Success (200 OK)**
```json
{
  "city": "Tirane",
  "temperature": 15.5,
  "humidity": 65,
  "description": "Partly cloudy",
  "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
}
```

**Bad Request (400)**
```json
{
  "error": "Parametri 'city' mungon në kërkesë"
}
```

**Service Error (502)**
```json
{
  "error": "Weather service error message"
}
```

#### Response Fields

| Field       | Type   | Description                           |
|-------------|--------|---------------------------------------|
| city        | string | Name of the city                      |
| temperature | number | Current temperature in Celsius        |
| humidity    | number | Current humidity percentage           |
| description | string | Weather condition description         |
| icon        | string | URL to weather condition icon         |

#### Examples

**Get weather for Tirane:**
```bash
curl -X GET "http://localhost:5000/weather?city=Tirane"
```

**Response:**
```json
{
  "city": "Tirane",
  "temperature": 18.3,
  "humidity": 72,
  "description": "Clear",
  "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
}
```

**Invalid request (missing city parameter):**
```bash
curl -X GET http://localhost:5000/weather
```

**Response:**
```json
{
  "error": "Parametri 'city' mungon në kërkesë"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- **400 Bad Request**: Invalid or missing parameters
- **502 Bad Gateway**: External weather service error
- **500 Internal Server Error**: Internal server issues

## CORS

The API has CORS enabled to allow cross-origin requests from frontend applications.

## Rate Limiting

Rate limiting depends on the WeatherAPI.com service limits associated with your API key.

## Supported Cities

The API supports weather data for any city name that is recognized by WeatherAPI.com. For the Albania Weather App specifically, these cities are pre-configured:

- Tirane
- Durres
- Shkoder
- Kukes
- Lezhe
- Diber
- Elbasan
- Berat
- Fier
- Vlore
- Gjirokaster
- Korce