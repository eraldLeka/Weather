🌦️ Quick Start Guide – Weather Albania
A full-stack web application displaying real-time weather information for Albanian cities with an interactive map.

🚀 Quick Setup
Prerequisites
Node.js (v16+)

Python (v3.8+)

Git

1. Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd weather-albania
2. Automated Setup (Recommended)
bash
Copy
Edit
./setup.sh
3. Manual Setup (Alternative)
Backend:

bash
Copy
Edit
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your WeatherAPI key
Frontend:

bash
Copy
Edit
cd frontend
npm install
4. Get API Key
Sign up at WeatherAPI.com (free)

Copy your API key

Edit backend/.env and replace your_weatherapi_key_here with your key

5. Run the Application
Terminal 1 (Backend):

bash
Copy
Edit
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python run.py
Terminal 2 (Frontend):

bash
Copy
Edit
cd frontend
npm start
6. Access the Application
Frontend: http://localhost:3000

Backend API: http://localhost:5000

📱 Features
Interactive map of Albania with 12 clickable regions

Real-time weather data from WeatherAPI

Responsive design for desktop and mobile

RESTful API with structured endpoints

Albanian language interface

🛠️ Tech Stack
Frontend: React 19, React Simple Maps, CSS3
Backend: Flask, Flask-CORS, Requests
External API: WeatherAPI.com

📡 API Endpoints
GET /health – Health check

GET /weather?city={city_name} – Get weather data for a city

🌍 Supported Cities
Tirana, Durres, Shkoder, Kukes, Lezhe, Diber, Elbasan, Berat, Fier, Vlore, Gjirokaster, Korce

🐛 Troubleshooting
Backend won't start: Check if API key is set in .env

CORS errors: Ensure Flask-CORS is installed

API errors: Verify internet connection and API key validity



🌤️ Weather Albania
A full-stack web application for weather forecasting in Albania.
The project includes an interactive map of Albania and displays weather information for the 12 main counties.

📋 Table of Contents
Features

Architecture

Installation & Running

Configuration

API Reference

Project Structure

Technologies Used

Contributing

✨ Features
Interactive Map: Map of Albania with 12 clickable counties

Real-time Data: Live weather information from WeatherAPI

Responsive Design: Interface optimized for desktop and mobile

RESTful API: Flask backend with structured endpoints

Localization: Interface in the Albanian language

Weather data includes:
Current temperature (°C)

Humidity (%)

Weather description

Weather icon

🏗️ Architecture
sql
Copy
Edit
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│   React Client  │ ◄──────────────► │  Flask Backend  │ ◄─────────────► │   WeatherAPI    │
│   (Frontend)    │                 │   (Backend)     │                │  (External API) │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
Frontend: React.js with modular components

Backend: Flask with blueprint pattern

External API: WeatherAPI for weather data

Data Format: JSON for all communications

🚀 Installation & Running
Prerequisites
Node.js (v16+)

Python (v3.8+)

npm or yarn

Git

1. Clone the project
bash
Copy
Edit
git clone <repository-url>
cd weather-albania
2. Configure the Backend
bash
Copy
Edit
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
# Add your API key in .env (see the Configuration section)
3. Configure the Frontend
bash
Copy
Edit
# In a new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install
4. Run the application
Backend (Terminal 1):

bash
Copy
Edit
cd backend
python run.py
The backend will be available at: http://localhost:5000

Frontend (Terminal 2):

bash
Copy
Edit
cd frontend
npm start
The frontend will be available at: http://localhost:3000

⚙️ Configuration
API Key for WeatherAPI
Register at WeatherAPI.com

Get your free API key

Create a .env file in the backend/ directory:

env
Copy
Edit
WEATHERAPI_API_KEY=your_api_key_here
SECRET_KEY=your_flask_secret_key_here
Environment Variables
Variable	Description	Default Value
WEATHERAPI_API_KEY	API key from WeatherAPI.com	-
SECRET_KEY	Flask secret key	"default"
FLASK_ENV	Environment mode	"development"

📡 API Reference
Base URL
arduino
Copy
Edit
http://localhost:5000
Endpoints
1. Health Check
http
Copy
Edit
GET /health
Response:

json
Copy
Edit
{
  "status": "ok"
}
2. Get weather data
http
Copy
Edit
GET /weather?city={city_name}
Parameters:

**Parameters:**
- `city` (required): City's name (p.sh., "Tirane", "Durres")

*Response Success (200):**
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
  "error": "Parameter 'city' missing in request"
}
```

**Response Error (502):**
```json
{
  "error": "Weather API error message"
}
```

## 📁 Struktura e Projektit

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
🛠️ Technologies Used
Frontend
React 19.1.0 – Main library
React DOM – DOM manipulation
React Icons – Icons for the interface
React Simple Maps – Components for maps
CSS3 – Styling and animations
Backend
Flask 2.3.2 – Web framework
Flask-CORS – Cross-origin resource sharing
Requests – HTTP client for API calls
Python-dotenv – Environment variables management
External Services
WeatherAPI.com – Weather data provider
Development Tool
Create React App – React development setup
Jest – Testing framework
ESLint – Code linting
🌍 Supported Counties
The application supports weather data for the 12 counties of Albania:
Shkodër – Shkodër
Kukës – Kukës
Lezhë – Lezhë
Dibër – Peshkopi
Tiranë – Tiranë
Durrës – Durrës
Elbasan – Elbasan
Fier – Fier
Berat – Berat
Vlorë – Vlorë
Gjirokastër - Gjirokastër
Korçë – Korçë

🐛 Debugging
Common Issues
Backend won’t start: Check if the API key is set in .env
CORS errors: Make sure Flask-CORS is installed and configured
API errors: Verify internet connectivity and API key validity

Logs
The backend prints debug information to the console for API calls and responses.
📈 Future Improvements
 Add 7-day weather forecast
 Automatic geolocation
 Dark/light mode theme
 Caching for API responses
 PWA support
 Notifications for extreme weather
 Graphs for temperature trends
📄 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions are welcome! Please:
Fork the project
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📧 Contact
For questions or issues, please open an issue on GitHub.
Developed with ❤️ for Albania 🇦🇱


