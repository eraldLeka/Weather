# Quick Start Guide - Weather Albania

A full-stack web application displaying real-time weather information for Albanian cities with an interactive map.

## 🚀 Quick Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- Git

### 1. Clone the repository
```bash
git clone <repository-url>
cd weather-albania
```

### 2. Automated Setup (Recommended)
```bash
./setup.sh
```

### 3. Manual Setup (Alternative)

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your WeatherAPI key
```

**Frontend:**
```bash
cd frontend
npm install
```

### 4. Get API Key
1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/) (free)
2. Copy your API key
3. Edit `backend/.env` and replace `your_weatherapi_key_here` with your key

### 5. Run the Application

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python run.py
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

### 6. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Features

- Interactive map of Albania with 12 clickable regions
- Real-time weather data from WeatherAPI
- Responsive design for desktop and mobile
- RESTful API with structured endpoints
- Albanian language interface

## 🛠️ Tech Stack

**Frontend:** React 19, React Simple Maps, CSS3  
**Backend:** Flask, Flask-CORS, Requests  
**External API:** WeatherAPI.com

## 📡 API Endpoints

- `GET /health` - Health check
- `GET /weather?city={city_name}` - Get weather data for a city

## 🌍 Supported Cities

Tirana, Durres, Shkoder, Kukes, Lezhe, Diber, Elbasan, Berat, Fier, Vlore, Gjirokaster, Korce

## 🐛 Troubleshooting

- **Backend won't start:** Check if API key is set in `.env`
- **CORS errors:** Ensure Flask-CORS is installed
- **API errors:** Verify internet connection and API key validity

For detailed documentation in Albanian, see [README.md](README.md).