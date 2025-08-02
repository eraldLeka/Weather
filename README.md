# Weather Albania 🌤️

Një aplikacion web full-stack për parashikimin e motit në Shqipëri. Projekti përfshin një hartë interaktive të Shqipërisë dhe shfaq informacionin e motit për 12 qarqet kryesore.

## 📋 Përmbajtja

- [Karakteristikat](#karakteristikat)
- [Arkitektura](#arkitektura)
- [Instalimi dhe Ekzekutimi](#instalimi-dhe-ekzekutimi)
- [Konfigurimi](#konfigurimi)
- [API Reference](#api-reference)
- [Struktura e Projektit](#struktura-e-projektit)
- [Teknologjitë e Përdorura](#teknologjitë-e-përdorura)
- [Kontributi](#kontributi)

## ✨ Karakteristikat

- **Hartë Interaktive**: Hartë e Shqipërisë me 12 qarqet e klikueshme
- **Të dhëna Real-time**: Informacion i motit në kohë reale nga WeatherAPI
- **Design Responsiv**: Interface e optimizuar për desktop dhe mobile
- **API RESTful**: Backend Flask me endpoints të strukturuar
- **Lokalizim**: Interface në gjuhën shqipe

### Të dhënat e motit përfshijnë:
- Temperatura aktuale (°C)
- Lagështia (%)
- Përshkrimi i motit
- Ikona e motit

## 🏗️ Arkitektura

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│   React Client  │ ◄──────────────► │  Flask Backend  │ ◄─────────────► │   WeatherAPI    │
│   (Frontend)    │                 │   (Backend)     │                │  (External API) │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

- **Frontend**: React.js me komponente modulare
- **Backend**: Flask me blueprint pattern
- **External API**: WeatherAPI për të dhënat e motit
- **Data Format**: JSON për të gjitha komunikacionet

## 🚀 Instalimi dhe Ekzekutimi

### Parashtesa
- Node.js (v16+)
- Python (v3.8+)
- npm ose yarn
- Git

### 1. Klononi projektin
```bash
git clone <repository-url>
cd weather-albania
```

### 2. Konfiguroni Backend-in

```bash
# Navigoni në backend
cd backend

# Krijoni virtual environment
python -m venv venv

# Aktivizoni virtual environment
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Instaloni dependencitë
pip install -r requirements.txt

# Krijoni .env file
cp .env.example .env
# Shtoni API key në .env (shiko sekcionin Konfigurimi)
```

### 3. Konfiguroni Frontend-in

```bash
# Në një terminal të ri, navigoni në frontend
cd frontend

# Instaloni dependencitë
npm install
```

### 4. Ekzekutoni aplikacionin

**Backend (Terminal 1):**
```bash
cd backend
python run.py
```
Backend do të jetë i disponueshëm në: `http://localhost:5000`

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```
Frontend do të jetë i disponueshëm në: `http://localhost:3000`

## ⚙️ Konfigurimi

### API Key për WeatherAPI

1. Regjistrohuni në [WeatherAPI.com](https://www.weatherapi.com/)
2. Merr API key-in tuaj falas
3. Krijoni file `.env` në direktorinë `backend/`:

```env
WEATHERAPI_API_KEY=your_api_key_here# Weather Albania 🌤️

Një aplikacion web full-stack për parashikimin e motit në Shqipëri. Projekti përfshin një hartë interaktive të Shqipërisë dhe shfaq informacionin e motit për 12 qarqet kryesore.

## 📋 Përmbajtja

- [Karakteristikat](#karakteristikat)
- [Arkitektura](#arkitektura)
- [Instalimi dhe Ekzekutimi](#instalimi-dhe-ekzekutimi)
- [Konfigurimi](#konfigurimi)
- [API Reference](#api-reference)
- [Struktura e Projektit](#struktura-e-projektit)
- [Teknologjitë e Përdorura](#teknologjitë-e-përdorura)
- [Kontributi](#kontributi)

## ✨ Karakteristikat

- **Hartë Interaktive**: Hartë e Shqipërisë me 12 qarqet e klikueshme
- **Të dhëna Real-time**: Informacion i motit në kohë reale nga WeatherAPI
- **Design Responsiv**: Interface e optimizuar për desktop dhe mobile
- **API RESTful**: Backend Flask me endpoints të strukturuar
- **Lokalizim**: Interface në gjuhën shqipe

### Të dhënat e motit përfshijnë:
- Temperatura aktuale (°C)
- Lagështia (%)
- Përshkrimi i motit
- Ikona e motit

## 🏗️ Arkitektura

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│   React Client  │ ◄──────────────► │  Flask Backend  │ ◄─────────────► │   WeatherAPI    │
│   (Frontend)    │                 │   (Backend)     │                │  (External API) │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

- **Frontend**: React.js me komponente modulare
- **Backend**: Flask me blueprint pattern
- **External API**: WeatherAPI për të dhënat e motit
- **Data Format**: JSON për të gjitha komunikacionet

## 🚀 Instalimi dhe Ekzekutimi

### Parashtesa
- Node.js (v16+)
- Python (v3.8+)
- npm ose yarn
- Git

### 1. Klononi projektin
```bash
git clone <repository-url>
cd weather-albania
```

### 2. Konfiguroni Backend-in

```bash
# Navigoni në backend
cd backend

# Krijoni virtual environment
python -m venv venv

# Aktivizoni virtual environment
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Instaloni dependencitë
pip install -r requirements.txt

# Krijoni .env file
cp .env.example .env
# Shtoni API key në .env (shiko sekcionin Konfigurimi)
```

### 3. Konfiguroni Frontend-in

```bash
# Në një terminal të ri, navigoni në frontend
cd frontend

# Instaloni dependencitë
npm install
```

### 4. Ekzekutoni aplikacionin

**Backend (Terminal 1):**
```bash
cd backend
python run.py
```
Backend do të jetë i disponueshëm në: `http://localhost:5000`

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```
Frontend do të jetë i disponueshëm në: `http://localhost:3000`

## ⚙️ Konfigurimi

### API Key për WeatherAPI

1. Regjistrohuni në [WeatherAPI.com](https://www.weatherapi.com/)
2. Merr API key-in tuaj falas
3. Krijoni file `.env` në direktorinë `backend/`:

```env
WEATHERAPI_API_KEY=your_api_key_here# Weather Albania 🌤️

Një aplikacion web full-stack për parashikimin e motit në Shqipëri. Projekti përfshin një hartë interaktive të Shqipërisë dhe shfaq informacionin e motit për 12 qarqet kryesore.

## 📋 Përmbajtja

- [Karakteristikat](#karakteristikat)
- [Arkitektura](#arkitektura)
- [Instalimi dhe Ekzekutimi](#instalimi-dhe-ekzekutimi)
- [Konfigurimi](#konfigurimi)
- [API Reference](#api-reference)
- [Struktura e Projektit](#struktura-e-projektit)
- [Teknologjitë e Përdorura](#teknologjitë-e-përdorura)
- [Kontributi](#kontributi)

## ✨ Karakteristikat

- **Hartë Interaktive**: Hartë e Shqipërisë me 12 qarqet e klikueshme
- **Të dhëna Real-time**: Informacion i motit në kohë reale nga WeatherAPI
- **Design Responsiv**: Interface e optimizuar për desktop dhe mobile
- **API RESTful**: Backend Flask me endpoints të strukturuar
- **Lokalizim**: Interface në gjuhën shqipe

### Të dhënat e motit përfshijnë:
- Temperatura aktuale (°C)
- Lagështia (%)
- Përshkrimi i motit
- Ikona e motit

## 🏗️ Arkitektura

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│   React Client  │ ◄──────────────► │  Flask Backend  │ ◄─────────────► │   WeatherAPI    │
│   (Frontend)    │                 │   (Backend)     │                │  (External API) │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

- **Frontend**: React.js me komponente modulare
- **Backend**: Flask me blueprint pattern
- **External API**: WeatherAPI për të dhënat e motit
- **Data Format**: JSON për të gjitha komunikacionet

## 🚀 Instalimi dhe Ekzekutimi

### Parashtesa
- Node.js (v16+)
- Python (v3.8+)
- npm ose yarn
- Git

### 1. Klononi projektin
```bash
git clone <repository-url>
cd weather-albania
```

### 2. Konfiguroni Backend-in

```bash
# Navigoni në backend
cd backend

# Krijoni virtual environment
python -m venv venv

# Aktivizoni virtual environment
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Instaloni dependencitë
pip install -r requirements.txt

# Krijoni .env file
cp .env.example .env
# Shtoni API key në .env (shiko sekcionin Konfigurimi)
```

### 3. Konfiguroni Frontend-in

```bash
# Në një terminal të ri, navigoni në frontend
cd frontend

# Instaloni dependencitë
npm install
```

### 4. Ekzekutoni aplikacionin

**Backend (Terminal 1):**
```bash
cd backend
python run.py
```
Backend do të jetë i disponueshëm në: `http://localhost:5000`

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```
Frontend do të jetë i disponueshëm në: `http://localhost:3000`

## ⚙️ Konfigurimi

### API Key për WeatherAPI

1. Regjistrohuni në [WeatherAPI.com](https://www.weatherapi.com/)
2. Merr API key-in tuaj falas
3. Krijoni file `.env` në direktorinë `backend/`:

```env
WEATHERAPI_API_KEY=your_api_key_here
```env
WEATHERAPI_API_KEY=your_api_key_here
SECRET_KEY=your_flask_secret_key_here
```

### Environment Variables

| Variable | Përshkrimi | Vlera Default |
|----------|------------|---------------|
| `WEATHERAPI_API_KEY` | API key nga WeatherAPI.com | - |
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

#### 2. Merr të dhënat e motit
```http
GET /weather?city={city_name}
```

**Parameters:**
- `city` (required): Emri i qytetit (p.sh., "Tirane", "Durres")

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
  "error": "Parametri 'city' mungon në kërkesë"
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

## 🛠️ Teknologjitë e Përdorura

### Frontend
- **React 19.1.0** - Library kryesor
- **React DOM** - DOM manipulation
- **React Icons** - Ikona për interface
- **React Simple Maps** - Komponente për harta
- **CSS3** - Styling dhe animacione

### Backend
- **Flask 2.3.2** - Web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Requests** - HTTP client për API calls
- **Python-dotenv** - Environment variables management

### External Services
- **WeatherAPI.com** - Weather data provider

### Development Tools
- **Create React App** - React development setup
- **Jest** - Testing framework
- **ESLint** - Code linting

## 🌍 Qarqet e Mbështetura
Aplikacioni mbështet të dhënat e motit për 12 qarqet e Shqipërisë:

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

1. **Backend nuk starton**: Kontrolloni nëse API key është vendosur në `.env`
2. **CORS errors**: Sigurohuni që Flask-CORS është instaluar dhe konfiguruar
3. **API errors**: Verifikoni konektivitetin me internet dhe validitetin e API key

### Logs
Backend printon debug informacion në console për API calls dhe responses.

## 📈 Përmirësime të Ardhshme

- [ ] Shtimi i parashikimit 7-ditor
- [ ] Geolocalization automatike
- [ ] Tema dark/light mode
- [ ] Cache për API responses
- [ ] PWA support
- [ ] Notifikime për moti ekstrem
- [ ] Grafika për trendet e temperaturës

## 📄 Licensa

Ky projekt është i licensuar nën [MIT License](LICENSE).

## 🤝 Kontributi

Kontributet janë të mirëpritura! Ju lutem:

1. Fork projektin
2. Krijoni një branch për feature-in tuaj (`git checkout -b feature/AmazingFeature`)
3. Commit ndryshimet (`git commit -m 'Add some AmazingFeature'`)
4. Push në branch (`git push origin feature/AmazingFeature`)
5. Hapni një Pull Request

## 📧 Kontakt

Për pyetje ose probleme, ju lutem hapni një issue në GitHub.

---

**Zhvilluar me ❤️ për Shqipërinë** 🇦🇱
