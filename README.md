# Weather Albania 🌤️

A full-stack web application for weather forecasting in Albania. The project includes an interactive map of Albania and displays weather information for the 12 main districts.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation and Setup](#installation-and-setup)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## ✨ Features

- **Interactive Map**: Map of Albania with 12 clickable districts
- **Real-time Data**: Real-time weather information from WeatherAPI
- **Responsive Design**: Interface optimized for desktop and mobile
- **RESTful API**: Flask backend with structured endpoints
- **Localization**: Interface in Albanian language

### Weather data includes:
- Current temperature (°C)
- Humidity (%)
- Weather description
- Weather icon

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│   React Client  │ ◄──────────────► │  Flask Backend  │ ◄─────────────► │   WeatherAPI    │
│   (Frontend)    │                 │   (Backend)     │                │  (External API) │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

- **Frontend**: React.js with modular components
- **Backend**: Flask with blueprint pattern
- **External API**: WeatherAPI for weather data
- **Data Format**: JSON for all communications

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- npm or yarn
- Git

### 1. Clone the project
```bash
git clone <repository-url>
cd weather-albania
```

### 2. Configure Backend

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add API key to .env (see Configuration section)
```

### 3. Configure Frontend

```bash
# In a new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install
```

### 4. Run the application

**Backend (Terminal 1):**
```bash
cd backend
python run.py
```
Backend will be available at: `http://localhost:5000`

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```
Frontend will be available at: `http://localhost:3000`

## ⚙️ Configuration

### API Key for WeatherAPI

1. Register at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your free API key
3. Create `.env` file in the `backend/` directory:

```env
WEATHERAPI_API_KEY=your_api_key_here
SECRET_KEY=your_flask_secret_key_here
```

### Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `WEATHERAPI_API_KEY` | API key from WeatherAPI.com | - |
| `SECRET_KEY` | Flask secret key | "default" |
| `FLASK_ENV` | Environment mode | "development" |

## 📡 API Reference

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "ok"
}
```

#### 2. Get weather data
```http
GET /weather?city={city_name}
```

**Parameters:**
- `city` (required): City name (e.g., "Tirane", "Durres")

**Response Success (200):**
```json
{
  "city": "Tirane",
  "temperature": 22.5,
  "humidity": 65,
  "description": "Partly cloudy",
  "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
}
```

**Response Error (400):**
```json
{
  "error": "Parameter 'city' is missing from request"
}
```

**Response Error (502):**
```json
{
  "error": "Weather API error message"
}
```

## 📁 Project Structure

```
weather-albania/
├── backend/                 # Flask backend
│   ├── app/
│   │   ├── __init__.py     # Flask app factory
│   │   ├── routes.py       # API routes
│   │   ├── weather_api.py  # WeatherAPI integration
│   │   ├── config.py       # Configuration
│   │   └── utils.py        # Utility functions
│   ├── requirements.txt    # Python dependencies
│   └── run.py             # Application entry point
├── frontend/               # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── MapAlbania.js
│   │   │   ├── WeatherDisplay.js
│   │   │   └── WeatherDisplay.css
│   │   ├── assets/        # Images and SVGs
│   │   ├── App.js         # Main App component
│   │   ├── api.js         # API integration
│   │   ├── qarqet.json    # Albanian districts data
│   │   └── index.js       # React entry point
│   └── package.json       # Node dependencies
├── requirements.txt       # Root Python dependencies
├── .gitignore            # Git ignore rules
├── LICENSE               # License file
└── README.md             # Project documentation
```

## 🛠️ Technologies Used

### Frontend
- **React 19.1.0** - Main library
- **React DOM** - DOM manipulation
- **React Icons** - Interface icons
- **React Simple Maps** - Map components
- **CSS3** - Styling and animations

### Backend
- **Flask 2.3.2** - Web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Requests** - HTTP client for API calls
- **Python-dotenv** - Environment variables management

### External Services
- **WeatherAPI.com** - Weather data provider

### Development Tools
- **Create React App** - React development setup
- **Jest** - Testing framework
- **ESLint** - Code linting

## 🌍 Supported Districts

The application supports weather data for 12 districts of Albania:

1. **Shkodër** - Shkodër
2. **Kukës** - Kukës  
3. **Lezhë** - Lezhë
4. **Dibër** - Peshkopi
5. **Tiranë** - Tiranë
6. **Durrës** - Durrës
7. **Elbasan** - Elbasan
8. **Fier** - Fier
9. **Berat** - Berat
10. **Vlorë** - Vlorë
11. **Gjirokastër** - Gjirokastër
12. **Korçë** - Korçë

## 🐛 Debugging

### Common Issues

1. **Backend won't start**: Check if API key is set in `.env`
2. **CORS errors**: Ensure Flask-CORS is installed and configured
3. **API errors**: Verify internet connectivity and API key validity

### Logs
Backend prints debug information in console for API calls and responses.

## 📈 Future Improvements

- [ ] Add 7-day weather forecast
- [ ] Automatic geolocation
- [ ] Dark/light theme mode
- [ ] Cache for API responses
- [ ] PWA support
- [ ] Extreme weather notifications
- [ ] Temperature trend charts

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or issues, please open an issue on GitHub.

---

**Developed with ❤️ for Albania** 🇦🇱
