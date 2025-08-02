# Frontend API Services Documentation

## Overview

This document provides detailed documentation for all frontend API service functions that handle communication between the React frontend and the Flask backend.

## Module: `src/api.js`

### Function: `fetchWeather(city)`

Fetches weather information for a specified city from the backend API.

#### Description

An asynchronous function that makes HTTP requests to the backend weather API endpoint. It handles API communication, error handling, and data processing for the frontend application.

#### Parameters

| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| city      | string | Yes      | Name of the city to get weather for |

#### Returns

**Success Promise Resolution:**
```javascript
{
  city: "Tirane",
  temperature: 18.3,
  humidity: 72,
  description: "Clear",
  icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
}
```

**Error Promise Rejection:**
- Throws an `Error` object with descriptive message

#### Response Data Structure

| Field       | Type   | Description                           |
|-------------|--------|---------------------------------------|
| city        | string | Name of the city from API response    |
| temperature | number | Current temperature in Celsius        |
| humidity    | number | Current humidity percentage (0-100)   |
| description | string | Weather condition description         |
| icon        | string | Relative URL to weather condition icon |

#### Error Handling

The function implements comprehensive error handling:

1. **Network Errors**: Connection issues, timeouts
2. **HTTP Errors**: Non-200 status codes from server
3. **Parse Errors**: Invalid JSON responses
4. **Backend Errors**: Error responses from weather API

#### HTTP Request Details

**Endpoint:**
```
GET http://localhost:5000/weather?city={city}
```

**Headers:**
```javascript
{
  'Cache-Control': 'no-cache'
}
```

**Method:** GET

#### Example Usage

##### Basic Usage
```javascript
import { fetchWeather } from './api';

// Async/await pattern
async function getWeatherData() {
  try {
    const weather = await fetchWeather('Tirane');
    console.log('Weather data:', weather);
    return weather;
  } catch (error) {
    console.error('Failed to fetch weather:', error.message);
    throw error;
  }
}
```

##### Promise Chain Pattern
```javascript
import { fetchWeather } from './api';

fetchWeather('Durres')
  .then(weather => {
    console.log('Weather in Durres:', weather);
    // Update UI with weather data
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle error in UI
  });
```

##### React Component Integration
```javascript
import React, { useState } from 'react';
import { fetchWeather } from './api';

function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadWeather = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => loadWeather('Shkoder')}>
        Get Weather for Shkoder
      </button>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Condition: {weather.description}</p>
        </div>
      )}
    </div>
  );
}
```

#### Error Types and Messages

##### Network Errors
```javascript
// Connection timeout or network unavailable
throw new Error("Network Error: Unable to connect to weather service");
```

##### HTTP Status Errors
```javascript
// Server returns 4xx or 5xx status codes
throw new Error("Error 400: Bad Request");
throw new Error("Error 502: Bad Gateway");
```

##### Server Error Responses
```javascript
// Backend returns error in JSON format
{
  "error": "Parametri 'city' mungon në kërkesë"
}
// Becomes: Error 400: Bad Request
```

#### Debug Features

The function includes console logging for development:

```javascript
console.log(`Fetching weather for ${city}`);
console.log("Weather data:", data);
console.error("Fetch error:", error);
```

#### Configuration

##### API Base URL
Currently hardcoded to `http://localhost:5000`. In production, this should be configurable via environment variables.

**Recommended Environment Configuration:**
```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
```

##### Request Configuration
- **Method**: GET
- **Cache Control**: Disabled (`no-cache`)
- **Content Type**: Expects JSON response

#### Dependencies

- **Fetch API**: Modern browser HTTP client
- **Environment**: Requires backend server running on specified URL

---

## API Communication Patterns

### Request Flow

1. **User Interaction**: User clicks on map or selects city
2. **Component Handler**: React component calls `fetchWeather()`
3. **HTTP Request**: Function sends GET request to backend
4. **Backend Processing**: Flask server processes request and calls external API
5. **Response**: Backend returns processed weather data
6. **Frontend Update**: React component updates state and UI

### Data Flow Diagram

```
Frontend Component
       ↓
   fetchWeather()
       ↓
  HTTP GET Request
       ↓
   Flask Backend
       ↓
  WeatherAPI.com
       ↓
   Flask Backend
       ↓
  HTTP Response
       ↓
 Frontend Component
       ↓
   UI Update
```

### Error Propagation

Errors flow from the deepest level up to the UI:

1. **External API Error** → Backend error response
2. **Backend Error** → HTTP error status
3. **HTTP Error** → JavaScript exception
4. **Exception** → Component error state
5. **Error State** → User feedback

---

## Best Practices

### Error Handling
```javascript
// Always handle errors in components
const handleWeatherFetch = async (city) => {
  try {
    const data = await fetchWeather(city);
    setWeather(data);
    setError(null); // Clear previous errors
  } catch (error) {
    setError(error.message);
    setWeather(null); // Clear previous data
  }
};
```

### Loading States
```javascript
// Provide feedback during API calls
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  try {
    const data = await fetchWeather(city);
    // Handle success
  } catch (error) {
    // Handle error
  } finally {
    setLoading(false); // Always reset loading
  }
};
```

### Data Validation
```javascript
// Validate API responses
const isValidWeatherData = (data) => {
  return data && 
         typeof data.city === 'string' &&
         typeof data.temperature === 'number' &&
         typeof data.humidity === 'number' &&
         typeof data.description === 'string';
};
```

### Performance Optimization
```javascript
// Debounce API calls to prevent excessive requests
import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);
  
  return useCallback((...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
};

// Usage
const debouncedFetch = useDebounce(fetchWeather, 500);
```

---

## Testing

### Unit Test Example
```javascript
// Mock API for testing
jest.mock('./api', () => ({
  fetchWeather: jest.fn()
}));

import { fetchWeather } from './api';

test('fetchWeather returns weather data', async () => {
  const mockWeather = {
    city: 'Tirane',
    temperature: 20,
    humidity: 60,
    description: 'Sunny',
    icon: '//example.com/icon.png'
  };
  
  fetchWeather.mockResolvedValue(mockWeather);
  
  const result = await fetchWeather('Tirane');
  expect(result).toEqual(mockWeather);
});
```

### Integration Test Example
```javascript
import { render, fireEvent, waitFor } from '@testing-library/react';
import WeatherComponent from './WeatherComponent';

test('displays weather data after city selection', async () => {
  const { getByText, getByRole } = render(<WeatherComponent />);
  
  fireEvent.click(getByText('Get Weather'));
  
  await waitFor(() => {
    expect(getByText(/temperature/i)).toBeInTheDocument();
  });
});
```

---

## Future Enhancements

### Caching
```javascript
// Add response caching to reduce API calls
const cache = new Map();

const fetchWeatherWithCache = async (city) => {
  if (cache.has(city)) {
    const cached = cache.get(city);
    // Check if cache is still valid (e.g., < 10 minutes old)
    if (Date.now() - cached.timestamp < 600000) {
      return cached.data;
    }
  }
  
  const data = await fetchWeather(city);
  cache.set(city, { data, timestamp: Date.now() });
  return data;
};
```

### Retry Logic
```javascript
// Add automatic retry for failed requests
const fetchWeatherWithRetry = async (city, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetchWeather(city);
    } catch (error) {
      if (attempt === maxRetries) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
};
```

### Request Cancellation
```javascript
// Add AbortController support
const fetchWeatherCancellable = async (city, signal) => {
  const response = await fetch(
    `http://localhost:5000/weather?city=${city}`,
    { 
      signal,
      headers: { 'Cache-Control': 'no-cache' }
    }
  );
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
};
```