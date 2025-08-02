🌦️ Weather Albania
A full-stack web application that delivers real-time weather information for cities across Albania, featuring an interactive map and a modern, responsive interface.

🚀 Quick Start
Prerequisites
Node.js (v16+)
Python (v3.8+)
Git
1. Clone the Repository
bash
git clone <repository-url>
cd weather-albania
2. Automated Setup (Recommended)
bash
./setup.sh
3. Manual Setup (Alternative)
Backend
bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your WeatherAPI key
Frontend
bash
cd frontend
npm install
4. Get an API Key
Register at WeatherAPI.com (free)
Copy your API key
Edit backend/.env and replace your_weatherapi_key_here with your key
5. Run the Application
Terminal 1 (Backend)
bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python run.py
Terminal 2 (Frontend)
bash
cd frontend
npm start
6. Access the Application
Frontend: http://localhost:3000
Backend API: http://localhost:5000
📱 Features
Interactive Map: Visual, clickable map of Albania’s 12 counties
Live Weather Data: Real-time info via WeatherAPI
Responsive Design: Works beautifully on desktop & mobile
RESTful API: Structured endpoints with Flask backend
Localization: Interface in Albanian
Weather Details: Temperature, humidity, description, and icons
🏗️ Architecture
Code
┌───────────────┐    HTTP/REST   ┌───────────────┐    API Call   ┌───────────────┐
│ React Client  │ ◄────────────► │ Flask Backend │ ◄────────────►│  WeatherAPI   │
│  (Frontend)   │                │  (Backend)    │               │ (External API)│
└───────────────┘                └───────────────┘               └───────────────┘
Frontend: React.js, modular components
Backend: Flask with blueprint pattern
Data Format: JSON for all communications
⚙️ Configuration
Environment Variables in backend/.env:

Variable	Description	Default
WEATHERAPI_API_KEY	API key from WeatherAPI.com	(required)
SECRET_KEY	Flask secret key	"default"
FLASK_ENV	Environment mode	"development"
Example:

env
WEATHERAPI_API_KEY=your_api_key_here
SECRET_KEY=your_flask_secret_key_here
📡 API Reference
Base URL: http://localhost:5000

1. Health Check
GET /health
Response: { "status": "ok" }
2. Get Weather Data
GET /weather?city={city_name}
Success Response (200):
JSON
{
  "city": "Tirane",
  "temperature": 22.5,
  "humidity": 65,
  "description": "Partly cloudy",
  "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
}
Error Response (400):
JSON
{ "error": "Parameter 'city' missing in request" }
Error Response (502):
JSON
{ "error": "Weather API error message" }
📁 Project Structure
Code
weather-albania/
├── backend/                 # Flask backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── weather_api.py
│   │   ├── config.py
│   │   └── utils.py
│   ├── requirements.txt
│   └── run.py
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── qarqet.json
│   │   └── index.js
│   └── package.json
├── requirements.txt
├── .gitignore
├── LICENSE
└── README.md
🛠️ Technologies
Frontend

React 19.1.0
React DOM, Icons, Simple Maps
CSS3
Backend

Flask 2.3.2
Flask-CORS, Requests, Python-dotenv
External

WeatherAPI.com
Development

Create React App, Jest, ESLint
🌍 Supported Counties
Shkodër, Kukës, Lezhë, Dibër, Tiranë, Durrës, Elbasan, Fier, Berat, Vlorë, Gjirokastër, Korçë
🐛 Troubleshooting
Backend won’t start: Check API key in .env
CORS errors: Ensure Flask-CORS is installed/configured
API errors: Check internet connection and API key validity
📈 Roadmap / Future Improvements
7-day weather forecast
Automatic geolocation
Dark/light mode theme
API response caching
PWA support
Extreme weather notifications
Temperature trend graphs
📄 License
Licensed under the MIT License.

🤝 Contributing
Fork the project
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes
Push to your branch
Open a Pull Request
📧 Contact
For questions or issues, please open an issue on GitHub.

Developed with ❤️ for Albania 🇦🇱
