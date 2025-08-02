# Backend Functions Documentation

## Overview

This document provides detailed documentation for all backend functions and services in the Weather API application.

## Module: `app/__init__.py`

### Function: `create_app()`

Flask application factory function that creates and configures the Flask application instance.

#### Description
Creates a Flask application with CORS support, loads environment variables, and registers blueprints.

#### Parameters
None

#### Returns
- `Flask`: Configured Flask application instance

#### Configuration
- **SECRET_KEY**: Loaded from environment variable `SECRET_KEY` or defaults to "default"
- **CORS**: Enabled for all routes to allow cross-origin requests

#### Example Usage
```python
from app import create_app

app = create_app()
if __name__ == '__main__':
    app.run(debug=True)
```

#### Dependencies
- `flask.Flask`: Core Flask framework
- `flask_cors.CORS`: Cross-Origin Resource Sharing support
- `dotenv.load_dotenv`: Environment variable loading
- `os`: Operating system interface

---

## Module: `app/weather_api.py`

### Function: `get_weather(city)`

Fetches current weather information for a specified city using the WeatherAPI.com service.

#### Description
Makes an HTTP request to WeatherAPI.com to retrieve current weather conditions for the specified city. Returns formatted weather data or error information.

#### Parameters
| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| city      | string | Yes      | Name of the city to get weather for |

#### Returns
**Success Response (dict):**
```python
{
    "city": "Tirane",
    "temperature": 18.3,
    "humidity": 72,
    "description": "Clear",
    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
}
```

**Error Response (dict):**
```python
{
    "error": "Error message description"
}
```

#### Return Fields

| Field       | Type   | Description                           |
|-------------|--------|---------------------------------------|
| city        | string | Name of the city from API response    |
| temperature | float  | Current temperature in Celsius        |
| humidity    | int    | Current humidity percentage (0-100)   |
| description | string | Weather condition description         |
| icon        | string | Relative URL to weather condition icon |
| error       | string | Error message (only present on error) |

#### Environment Variables Required
- `WEATHERAPI_API_KEY`: API key for WeatherAPI.com service

#### Error Handling
The function handles various error scenarios:

1. **Missing API Key**
   ```python
   {"error": "API key not found"}
   ```

2. **WeatherAPI Service Error**
   ```python
   {"error": "Weather API error message"}
   ```

3. **Network/Request Errors**
   ```python
   {"error": "Exception message"}
   ```

#### Example Usage
```python
from app.weather_api import get_weather

# Success case
weather_data = get_weather("Tirane")
print(weather_data)
# Output: {"city": "Tirane", "temperature": 18.3, ...}

# Error case (invalid city)
weather_data = get_weather("InvalidCity")
print(weather_data)
# Output: {"error": "No matching location found."}
```

#### API Integration Details

**External API Endpoint:**
```
http://api.weatherapi.com/v1/current.json
```

**Request Parameters:**
- `key`: API key for authentication
- `q`: City name query
- `aqi`: Air quality data (set to "no")

**Response Processing:**
The function extracts the following fields from the WeatherAPI response:
- `data["location"]["name"]` → `city`
- `data["current"]["temp_c"]` → `temperature`
- `data["current"]["humidity"]` → `humidity`
- `data["current"]["condition"]["text"]` → `description`
- `data["current"]["condition"]["icon"]` → `icon`

#### Dependencies
- `requests`: HTTP library for making API calls
- `os`: For accessing environment variables

#### Debug Features
The function includes debug logging that prints:
- API key status (masked for security)
- HTTP response status code and content

---

## Module: `app/routes.py`

### Blueprint: `main`

Flask blueprint that groups all main application routes.

#### Routes

##### Route: `/` (GET)
- **Function**: `home()`
- **Purpose**: Welcome message endpoint
- **Returns**: JSON welcome message with 200 status

##### Route: `/health` (GET)
- **Function**: `health_check()`
- **Purpose**: Health status endpoint for monitoring
- **Returns**: JSON status object with 200 status

##### Route: `/weather` (GET)
- **Function**: `weather()`
- **Purpose**: Weather data endpoint
- **Parameters**: `city` (query parameter)
- **Returns**: Weather data JSON or error with appropriate status code

### Function: `home()`

Returns a welcome message for the API.

#### Returns
- `tuple`: (JSON response, status code)

#### Example
```python
return jsonify({"message": "Welcome to the Weather API!"}), 200
```

### Function: `health_check()`

Returns the API health status for monitoring purposes.

#### Returns
- `tuple`: (JSON response, status code)

#### Example
```python
return jsonify({"status": "ok"}), 200
```

### Function: `weather()`

Handles weather data requests with city parameter validation.

#### Request Parameters
- `city` (query string): Required city name

#### Response Codes
- **200**: Success with weather data
- **400**: Missing city parameter
- **502**: Weather service error

#### Logic Flow
1. Extract city parameter from request
2. Validate city parameter exists
3. Call `get_weather()` service function
4. Handle service response and errors
5. Return appropriate JSON response

#### Error Messages
- Missing parameter: "Parametri 'city' mungon në kërkesë"

---

## Configuration

### Environment Variables

| Variable            | Required | Description                    |
|--------------------|----------|--------------------------------|
| SECRET_KEY         | No       | Flask secret key (has default) |
| WEATHERAPI_API_KEY | Yes      | WeatherAPI.com authentication  |

### Dependencies

**Production Dependencies:**
- Flask==2.3.2
- requests==2.31.0
- Flask-Cors==3.0.10
- python-dotenv==1.0.0

## Error Handling Patterns

The backend follows consistent error handling patterns:

1. **Validation Errors**: Return 400 with descriptive messages
2. **Service Errors**: Return 502 for external service failures
3. **Internal Errors**: Let Flask handle 500 errors naturally
4. **Logging**: Debug information for troubleshooting

## Security Considerations

- Environment variables for sensitive data (API keys)
- CORS configuration for cross-origin requests
- Input validation on all endpoints
- No sensitive data in error messages