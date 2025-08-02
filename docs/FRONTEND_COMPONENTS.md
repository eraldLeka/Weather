# Frontend Components Documentation

## Overview

This document provides detailed documentation for all React components in the Weather Application frontend.

## Component Hierarchy

```
App (Root Component)
├── MapAlbania (Interactive Map Component)
└── WeatherDisplay (Weather Information Display)
```

---

## Component: `App`

**File**: `src/App.js`

### Description

The main application component that manages the overall state and coordinates between the map and weather display components. It handles city selection, weather data fetching, and dynamic background styling based on weather conditions.

### Props

This is the root component and doesn't accept props.

### State

| State Variable | Type    | Description                           |
|----------------|---------|---------------------------------------|
| weather        | object  | Current weather data for selected city |
| loading        | boolean | Loading state for weather requests     |
| error          | string  | Error message for failed requests      |

### Functions

#### `handleSelectCity(cityId)`

Handles city selection from the map component and fetches weather data.

**Parameters:**
- `cityId` (string): The city identifier from the map selection

**Behavior:**
1. Converts cityId to city name using `cityIdToName` mapping
2. Sets loading state to true
3. Fetches weather data using `fetchWeather` API function
4. Updates weather state on success or error state on failure
5. Resets loading state

#### `getBackgroundClass()`

Determines the CSS background class based on current weather conditions.

**Returns:**
- `string`: CSS class name for background styling

**Weather Condition Mapping:**
- "sunny", "clear" → "background-sunny"
- "cloud" → "background-cloudy"
- "rain", "drizzle" → "background-rain"
- "snow" → "background-snow"
- "thunder" → "background-thunderstorm"
- "fog", "mist" → "background-fog"

### City Mapping

The component includes a mapping of city IDs to display names:

```javascript
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
  korce: "Korce"
};
```

### Styling Features

- **Dynamic Backgrounds**: Changes based on weather conditions
- **Responsive Layout**: Flexbox layout that adapts to screen size
- **Conditional Text Color**: Light text for dark backgrounds, dark text for light backgrounds
- **Background Overlay**: Semi-transparent overlay for better readability

### Usage Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Dependencies

- `react`: Core React library
- `./components/MapAlbania`: Interactive map component
- `./components/WeatherDisplay`: Weather information display
- `./api`: API service functions
- `./App.css`: Component styling

---

## Component: `MapAlbania`

**File**: `src/components/MapAlbania.js`

### Description

An interactive SVG map of Albania that allows users to click on different regions to select cities. The component uses an SVG map and handles click events to identify the selected region.

### Props

| Prop         | Type     | Required | Description                              |
|--------------|----------|----------|------------------------------------------|
| onSelectCity | function | Yes      | Callback function called when a city is selected |

### Prop Details

#### `onSelectCity(cityId)`

**Parameters:**
- `cityId` (string): The identifier of the selected city

**Called when:** A user clicks on a region of the map

### City Mapping

Internal mapping from SVG element IDs to city identifiers:

```javascript
const idToCity = {
  AL01: "berat",
  AL02: "durres", 
  AL03: "elbasan",
  AL04: "fier",
  AL05: "gjirokaster",
  AL06: "korce",
  AL07: "kukes",
  AL08: "lezhe",
  AL09: "diber",
  AL10: "shkoder",
  AL11: "tirane",
  AL12: "vlore"
};
```

### Event Handling

#### `handleClick(event)`

Handles click events on the map SVG.

**Process:**
1. Gets the clicked element from the event
2. Traverses up the DOM tree to find an element with a valid ID
3. Maps the ID to a city using `idToCity`
4. Calls `onSelectCity` callback with the city identifier

### Usage Example

```jsx
import React, { useState } from 'react';
import MapAlbania from './components/MapAlbania';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelection = (cityId) => {
    console.log('Selected city:', cityId);
    setSelectedCity(cityId);
  };

  return (
    <div>
      <MapAlbania onSelectCity={handleCitySelection} />
      {selectedCity && <p>Selected: {selectedCity}</p>}
    </div>
  );
}
```

### Styling

- **Interactive Cursor**: Pointer cursor on hover
- **Responsive Design**: Scales to fit container
- **SVG Rendering**: Vector graphics for crisp display at any size

### Dependencies

- `react`: Core React library
- `react-inlinesvg`: SVG rendering component
- `../assets/albania-map.svg`: SVG map file

---

## Component: `WeatherDisplay`

**File**: `src/components/WeatherDisplay.js`

### Description

A component that displays current weather information in a formatted layout with icons and styling. It shows temperature, humidity, weather description, and a weather condition icon.

### Props

| Prop    | Type   | Required | Description                    |
|---------|--------|----------|--------------------------------|
| weather | object | Yes      | Weather data object to display |

### Weather Object Structure

The `weather` prop should contain:

```javascript
{
  city: "Tirane",           // string - City name
  temperature: 18.3,        // number - Temperature in Celsius
  humidity: 72,             // number - Humidity percentage
  description: "Clear",     // string - Weather condition description
  icon: "//cdn.weather..."  // string - Weather icon URL
}
```

### Required Weather Properties

| Property    | Type   | Description                           |
|-------------|--------|---------------------------------------|
| city        | string | Name of the city                      |
| temperature | number | Current temperature in Celsius        |
| humidity    | number | Current humidity percentage           |
| description | string | Weather condition description         |
| icon        | string | URL to weather condition icon         |

### Features

#### Icon Handling
- Automatically adds "https:" prefix to relative icon URLs
- Displays fallback when icon is not available
- Shows weather description as alt text for accessibility

#### Weather Icons
- Uses `react-icons/wi` for temperature and humidity indicators
- `WiThermometer`: Temperature display icon
- `WiHumidity`: Humidity display icon

### Conditional Rendering

The component includes safety checks:
- Returns `null` if no weather data provided
- Returns `null` if weather object lacks city property

### Usage Examples

#### Basic Usage
```jsx
import WeatherDisplay from './components/WeatherDisplay';

const weatherData = {
  city: "Tirane",
  temperature: 22.5,
  humidity: 65,
  description: "Partly cloudy",
  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
};

function App() {
  return (
    <div>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}
```

#### With Loading State
```jsx
import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading && <p>Loading weather data...</p>}
      {weather && <WeatherDisplay weather={weather} />}
      {!weather && !loading && <p>Select a city to see weather.</p>}
    </div>
  );
}
```

### Styling

**CSS Classes:**
- `.weather-display`: Main container
- `.weather-title`: City name heading
- `.weather-icon`: Weather condition icon
- `.weather-info`: Temperature and humidity information
- `.weather-description`: Weather condition text

**Styling Features:**
- Clean, modern design
- Responsive layout
- Icon integration
- Readable typography

### Dependencies

- `react`: Core React library
- `react-icons/wi`: Weather icons library
- `./WeatherDisplay.css`: Component styling

---

## Common Usage Patterns

### Full Application Integration

```jsx
import React, { useState } from 'react';
import MapAlbania from './components/MapAlbania';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './api';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCitySelect = async (cityId) => {
    setLoading(true);
    setError(null);
    
    try {
      const weatherData = await fetchWeather(cityId);
      setWeather(weatherData);
    } catch (err) {
      setError('Failed to load weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <MapAlbania onSelectCity={handleCitySelect} />
      
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}
```

### Error Handling

All components include appropriate error handling:
- Prop validation and type checking
- Graceful fallbacks for missing data
- User-friendly error messages

### Accessibility Features

- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- Screen reader friendly content

### Performance Considerations

- Efficient re-rendering with React's virtual DOM
- Minimal prop drilling
- Lightweight SVG for map rendering
- Optimized icon loading