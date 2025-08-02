# Weather Application Documentation

## Overview

Welcome to the comprehensive documentation for the Weather Application. This is a full-stack web application that provides real-time weather information for Albanian cities through an interactive map interface.

## Architecture

The application consists of:
- **Backend**: Flask REST API that integrates with WeatherAPI.com
- **Frontend**: React application with interactive SVG map and weather display

## Documentation Index

### 🚀 Getting Started

- **[Setup and Installation Guide](SETUP_GUIDE.md)** - Complete guide for setting up the development environment and running the application

### 🔧 Backend Documentation

- **[API Documentation](API_DOCUMENTATION.md)** - Complete REST API reference with endpoints, parameters, and examples
- **[Backend Functions Documentation](BACKEND_FUNCTIONS.md)** - Detailed documentation of all backend functions, services, and utilities

### ⚛️ Frontend Documentation

- **[Frontend Components Documentation](FRONTEND_COMPONENTS.md)** - Complete guide to React components with props, usage examples, and implementation details
- **[Frontend API Services Documentation](FRONTEND_API.md)** - Documentation for frontend API communication functions and patterns

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- WeatherAPI.com account (free)

### Installation
```bash
# Clone repository
git clone <repository-url>
cd weather-app

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create .env file with your WeatherAPI key
echo "WEATHERAPI_API_KEY=your_api_key_here" > .env

# Frontend setup
cd ../frontend
npm install

# Run the application
# Terminal 1 - Backend
cd backend && python run.py

# Terminal 2 - Frontend
cd frontend && npm start
```

## API Overview

### Main Endpoints

| Endpoint | Method | Description | Example |
|----------|--------|-------------|---------|
| `/health` | GET | API health check | `GET /health` |
| `/` | GET | Welcome message | `GET /` |
| `/weather` | GET | Get weather data | `GET /weather?city=Tirane` |

### Response Format
```json
{
  "city": "Tirane",
  "temperature": 18.3,
  "humidity": 72,
  "description": "Clear",
  "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
}
```

## Component Overview

### React Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `App` | Main application component | None (root) |
| `MapAlbania` | Interactive SVG map | `onSelectCity(cityId)` |
| `WeatherDisplay` | Weather information display | `weather` object |

### Component Hierarchy
```
App
├── MapAlbania (Interactive map)
└── WeatherDisplay (Weather info)
```

## Features

### 🗺️ Interactive Map
- Clickable SVG map of Albania
- 12 supported cities/regions
- Visual feedback on interaction

### 🌤️ Weather Information
- Real-time weather data
- Temperature and humidity
- Weather condition icons
- Weather descriptions

### 🎨 Dynamic UI
- Background changes based on weather conditions
- Responsive design
- Loading states and error handling
- Smooth transitions

## Supported Cities

The application supports weather data for these Albanian cities:

| Region ID | City Name | Display Name |
|-----------|-----------|--------------|
| AL01 | berat | Berat |
| AL02 | durres | Durres |
| AL03 | elbasan | Elbasan |
| AL04 | fier | Fier |
| AL05 | gjirokaster | Gjirokaster |
| AL06 | korce | Korce |
| AL07 | kukes | Kukes |
| AL08 | lezhe | Lezhe |
| AL09 | diber | Diber |
| AL10 | shkoder | Shkoder |
| AL11 | tirane | Tirane |
| AL12 | vlore | Vlore |

## Technology Stack

### Backend
- **Flask**: Web framework
- **Flask-CORS**: Cross-origin resource sharing
- **Requests**: HTTP library for API calls
- **Python-dotenv**: Environment variable management

### Frontend
- **React**: UI framework
- **React Icons**: Weather icons
- **React Inline SVG**: SVG rendering
- **Modern CSS**: Responsive styling

### External Services
- **WeatherAPI.com**: Weather data provider

## Development Workflow

### Backend Development
1. Activate virtual environment
2. Make code changes
3. Test API endpoints with curl or Postman
4. Run linting: `flake8` and `black`

### Frontend Development  
1. Start development server: `npm start`
2. Make component changes
3. Test in browser with hot reload
4. Run tests: `npm test`

## Error Handling

### Backend Errors
- **400**: Bad Request (missing parameters)
- **502**: Bad Gateway (external API errors)
- **500**: Internal Server Error

### Frontend Errors
- Network errors (connection issues)
- API errors (backend failures)
- Component errors (invalid props)

## Security Features

- Environment variable configuration
- Input validation
- CORS security
- No sensitive data in error messages
- API key protection

## Performance Considerations

### Backend
- Efficient API integration
- Error handling and timeouts
- Debug logging for development

### Frontend
- React optimizations
- Efficient re-rendering
- Lightweight SVG graphics
- Responsive images

## Deployment

### Development
- Backend: `python run.py` (Flask dev server)
- Frontend: `npm start` (React dev server)

### Production
- Backend: Gunicorn WSGI server
- Frontend: Optimized build with `npm run build`
- Static file serving with Nginx
- Environment-specific configuration

## Testing

### Backend Testing
```bash
# API endpoint tests
curl http://localhost:5000/health
curl "http://localhost:5000/weather?city=Tirane"
```

### Frontend Testing
```bash
# Run component tests
npm test

# Run with coverage
npm test -- --coverage
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API key not found | Check `.env` file in backend directory |
| CORS errors | Ensure Flask-CORS is installed |
| Port conflicts | Use different ports or kill existing processes |
| Module not found | Activate virtual environment and install dependencies |

### Debug Mode
- Backend: Set `FLASK_DEBUG=1`
- Frontend: Check browser console for errors

## Contributing

### Code Style
- Backend: Follow PEP 8 with `black` formatting
- Frontend: ESLint with React standards
- Documentation: Markdown with consistent formatting

### Pull Requests
1. Fork the repository
2. Create feature branch
3. Add tests for new functionality
4. Update documentation
5. Submit pull request

## Support

### Documentation
- API reference: [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- Component guide: [FRONTEND_COMPONENTS.md](FRONTEND_COMPONENTS.md)
- Setup instructions: [SETUP_GUIDE.md](SETUP_GUIDE.md)

### External Resources
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/docs/)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

### Community
- GitHub Issues for bug reports
- Feature requests welcome
- Documentation improvements appreciated

## License

This project is licensed under the terms specified in the LICENSE file.

---

*Last updated: January 2025*