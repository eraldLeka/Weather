# Setup and Installation Guide

## Overview

This guide provides comprehensive instructions for setting up and running the Weather Application, which consists of a Flask backend API and a React frontend.

## Prerequisites

### System Requirements

- **Operating System**: Linux, macOS, or Windows
- **Python**: Version 3.8 or higher
- **Node.js**: Version 16 or higher
- **npm**: Version 8 or higher (usually comes with Node.js)
- **Git**: For cloning the repository

### External Services

- **WeatherAPI.com Account**: Required for weather data
  - Sign up at [https://www.weatherapi.com/](https://www.weatherapi.com/)
  - Free tier provides sufficient API calls for development

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd weather-app
```

### 2. Backend Setup

#### Navigate to Backend Directory
```bash
cd backend
```

#### Create Python Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

#### Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### Environment Configuration
Create a `.env` file in the backend directory:

```bash
# backend/.env
WEATHERAPI_API_KEY=your_weatherapi_key_here
SECRET_KEY=your_secret_key_here
```

**Get Your WeatherAPI Key:**
1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Go to your dashboard
3. Copy your API key
4. Replace `your_weatherapi_key_here` in the `.env` file

**Generate Secret Key:**
```bash
# Generate a secure secret key
python -c "import secrets; print(secrets.token_hex(16))"
```

### 3. Frontend Setup

#### Navigate to Frontend Directory
```bash
cd ../frontend
```

#### Install Node.js Dependencies
```bash
npm install
```

---

## Running the Application

### Start Backend Server

```bash
# Navigate to backend directory (if not already there)
cd backend

# Activate virtual environment (if not already active)
source venv/bin/activate  # On Linux/macOS
# or
venv\Scripts\activate     # On Windows

# Start Flask development server
python run.py
```

The backend server will start on `http://localhost:5000`

#### Backend Verification
Test the backend is running:
```bash
curl http://localhost:5000/health
# Expected response: {"status":"ok"}
```

### Start Frontend Development Server

Open a new terminal window/tab:

```bash
# Navigate to frontend directory
cd frontend

# Start React development server
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

---

## Configuration Options

### Backend Configuration

#### Environment Variables

| Variable            | Required | Description                    | Default |
|--------------------|----------|--------------------------------|---------|
| WEATHERAPI_API_KEY | Yes      | WeatherAPI.com API key         | None    |
| SECRET_KEY         | No       | Flask secret key               | "default" |
| FLASK_ENV          | No       | Flask environment              | development |
| FLASK_DEBUG        | No       | Enable debug mode              | True    |

#### Production Configuration

For production deployment, create a production `.env` file:

```bash
# backend/.env.production
WEATHERAPI_API_KEY=your_production_api_key
SECRET_KEY=your_secure_production_secret_key
FLASK_ENV=production
FLASK_DEBUG=False
```

### Frontend Configuration

#### Environment Variables

Create a `.env` file in the frontend directory for custom configuration:

```bash
# frontend/.env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_VERSION=1.0.0
```

#### Production Build

```bash
# Create optimized production build
npm run build

# Serve production build locally for testing
npx serve -s build
```

---

## Development Workflow

### Backend Development

#### Running Tests
```bash
cd backend
python -m pytest tests/
```

#### Code Linting
```bash
# Install development dependencies
pip install flake8 black

# Run linting
flake8 app/
black app/
```

#### API Testing
```bash
# Test weather endpoint
curl "http://localhost:5000/weather?city=Tirane"

# Test with invalid city
curl "http://localhost:5000/weather?city=InvalidCity"

# Test health endpoint
curl http://localhost:5000/health
```

### Frontend Development

#### Available Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

#### Component Testing
```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm test -- --coverage
```

---

## Project Structure

```
weather-app/
├── backend/
│   ├── app/
│   │   ├── __init__.py          # Flask app factory
│   │   ├── routes.py            # API endpoints
│   │   ├── weather_api.py       # Weather service
│   │   ├── config.py            # Configuration
│   │   └── utils.py             # Utility functions
│   ├── requirements.txt         # Python dependencies
│   ├── run.py                   # Application entry point
│   └── .env                     # Environment variables
├── frontend/
│   ├── public/
│   │   ├── index.html           # HTML template
│   │   └── favicon.ico          # App icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── MapAlbania.js    # Interactive map
│   │   │   ├── WeatherDisplay.js # Weather info display
│   │   │   └── WeatherDisplay.css
│   │   ├── assets/
│   │   │   └── albania-map.svg  # SVG map file
│   │   ├── App.js               # Main component
│   │   ├── App.css              # App styling
│   │   ├── api.js               # API service functions
│   │   └── index.js             # React entry point
│   ├── package.json             # Node.js dependencies
│   └── .env                     # Environment variables
├── docs/                        # Documentation files
├── README.md                    # Project overview
└── requirements.txt             # Root dependencies
```

---

## Troubleshooting

### Common Issues

#### Backend Issues

**Issue**: `ModuleNotFoundError: No module named 'flask'`
```bash
# Solution: Ensure virtual environment is activated and dependencies installed
source venv/bin/activate
pip install -r requirements.txt
```

**Issue**: `WeatherAPI key not found`
```bash
# Solution: Check .env file exists and contains valid API key
cat backend/.env
# Verify API key is valid at https://www.weatherapi.com/
```

**Issue**: `Port 5000 already in use`
```bash
# Solution: Kill process using port or use different port
# Kill process (Linux/macOS):
sudo lsof -t -i tcp:5000 | xargs kill -9

# Or run on different port:
export FLASK_RUN_PORT=5001
python run.py
```

#### Frontend Issues

**Issue**: `npm: command not found`
```bash
# Solution: Install Node.js from https://nodejs.org/
# Verify installation:
node --version
npm --version
```

**Issue**: `Failed to fetch weather data`
```bash
# Solution: Ensure backend is running and accessible
curl http://localhost:5000/health

# Check browser console for CORS errors
# Ensure Flask-CORS is installed and configured
```

**Issue**: `Module not found: Can't resolve react-icons`
```bash
# Solution: Install missing dependencies
npm install react-icons react-inlinesvg
```

### Debug Mode

#### Backend Debug
```bash
# Enable Flask debug mode
export FLASK_DEBUG=1
python run.py
```

#### Frontend Debug
```bash
# Start with debug logging
REACT_APP_DEBUG=true npm start
```

### Logs and Monitoring

#### Backend Logs
```bash
# View Flask logs
tail -f backend/logs/app.log

# Enable verbose logging
export FLASK_LOG_LEVEL=DEBUG
```

#### Frontend Console
- Open browser Developer Tools (F12)
- Check Console tab for JavaScript errors
- Check Network tab for failed API requests

---

## Production Deployment

### Backend Deployment

#### Using Gunicorn
```bash
# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 "app:create_app()"
```

#### Using Docker
```dockerfile
# Dockerfile for backend
FROM python:3.9

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:create_app()"]
```

### Frontend Deployment

#### Build and Deploy
```bash
# Create production build
npm run build

# Deploy to static hosting (example with serve)
npm install -g serve
serve -s build -l 3000
```

#### Using Nginx
```nginx
# nginx.conf
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /path/to/build;
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use different API keys for development and production
- Rotate API keys regularly

### API Security
- Implement rate limiting for production
- Use HTTPS in production
- Validate all input parameters
- Implement proper error handling

### Frontend Security
- Sanitize user inputs
- Use environment variables for API URLs
- Implement Content Security Policy (CSP)

---

## Performance Optimization

### Backend
- Use Redis for caching API responses
- Implement connection pooling
- Add request logging and monitoring

### Frontend
- Implement lazy loading for components
- Use React.memo for expensive components
- Add service worker for offline support
- Optimize bundle size with code splitting

---

## Support and Resources

### Documentation
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/docs/)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

### Community
- Create GitHub issues for bugs
- Check existing issues before reporting
- Contribute to documentation improvements

### Development Resources
- API testing with Postman
- React DevTools browser extension
- Flask debug toolbar for development