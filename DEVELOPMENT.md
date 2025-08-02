# Development Guide - Weather Albania

This guide helps developers understand the codebase structure and development workflow for the Weather Albania project.

## 🚀 Quick Start for Developers

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- Git
- Code editor (VS Code recommended)

### Development Setup
```bash
# Clone and setup
git clone <repository-url>
cd weather-albania
./setup.sh

# Get API key from WeatherAPI.com and configure .env
# Edit backend/.env with your API key
```

## 🏗️ Architecture Overview

### Frontend (React)
```
frontend/src/
├── components/          # Reusable UI components
│   ├── MapAlbania.js   # Interactive Albania map
│   ├── WeatherDisplay.js # Weather info display
│   └── WeatherDisplay.css
├── assets/             # Static assets (images, SVGs)
├── App.js             # Main application component
├── api.js             # API communication layer
├── qarqet.json        # Albanian districts data
└── index.js           # React entry point
```

### Backend (Flask)
```
backend/app/
├── __init__.py        # Flask app factory pattern
├── routes.py          # API endpoint definitions
├── weather_api.py     # WeatherAPI integration
├── config.py          # Configuration settings
└── utils.py           # Utility functions
```

## 🔧 Development Workflow

### Running in Development Mode

**Backend (with auto-reload):**
```bash
cd backend
source venv/bin/activate
export FLASK_ENV=development
python run.py
```

**Frontend (with hot reload):**
```bash
cd frontend
npm start
```

### Code Style and Standards

**Frontend:**
- Use functional components with hooks
- Follow React best practices
- Use meaningful component and variable names
- Keep components small and focused
- Use CSS modules or styled-components for styling

**Backend:**
- Follow PEP 8 Python style guide
- Use Flask blueprints for organization
- Include docstrings for functions
- Handle errors gracefully
- Use environment variables for configuration

## 📡 API Development

### Adding New Endpoints

1. Define route in `backend/app/routes.py`:
```python
@main.route('/new-endpoint')
def new_endpoint():
    # Implementation
    return jsonify({"data": "response"})
```

2. Add API call in `frontend/src/api.js`:
```javascript
export const fetchNewData = async () => {
  const response = await fetch(`${API_BASE_URL}/new-endpoint`);
  return response.json();
};
```

### API Response Format
All API responses should follow this structure:
```json
{
  "data": {}, // Success data
  "error": "", // Error message (if any)
  "status": "success|error"
}
```

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
python -m pytest
```

### Manual Testing Checklist
- [ ] Map loads correctly
- [ ] All 12 districts are clickable
- [ ] Weather data displays for each city
- [ ] API endpoints return correct data
- [ ] Error handling works properly
- [ ] Responsive design on mobile

## 🌍 Adding New Cities/Districts

### Frontend
1. Update `qarqet.json` with new district data:
```json
{
  "id": "13",
  "emri": "New District",
  "kryeqytet": "Main City",
  "x": 150,
  "y": 200
}
```

2. Update `cityIdToName` mapping in `App.js`

### Backend
No changes needed - the API accepts any city name.

## 🎨 UI/UX Development

### Component Structure
```javascript
// Example component structure
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### Styling Guidelines
- Use BEM methodology for CSS classes
- Mobile-first responsive design
- Use CSS custom properties for theming
- Keep animations smooth and purposeful

## 🐛 Debugging

### Frontend Debugging
- Use React Developer Tools
- Check browser console for errors
- Use `console.log()` strategically
- Verify API calls in Network tab

### Backend Debugging
- Check Flask debug output
- Use `print()` statements for debugging
- Verify API responses with Postman/curl
- Check environment variables

### Common Issues
1. **CORS Errors**: Ensure Flask-CORS is properly configured
2. **API Key Issues**: Verify WeatherAPI key is set correctly
3. **Module Not Found**: Check virtual environment activation

## 🚀 Deployment

### Environment Variables
```env
# Production settings
FLASK_ENV=production
SECRET_KEY=strong-secret-key-here
WEATHERAPI_API_KEY=your-api-key
```

### Build Process
```bash
# Frontend build
cd frontend
npm run build

# Backend can run directly
cd backend
python run.py
```

## 📋 Contributing Guidelines

### Before Submitting a PR
1. Test your changes thoroughly
2. Update documentation if needed
3. Follow code style guidelines
4. Write clear commit messages
5. Update CHANGELOG.md

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Review Process
1. All PRs require review
2. Tests must pass
3. Code coverage should not decrease
4. Documentation must be updated

## 🔒 Security Considerations

- Never commit API keys or sensitive data
- Use environment variables for configuration
- Validate all user inputs
- Implement rate limiting for API endpoints
- Use HTTPS in production

## 📚 Useful Resources

- [React Documentation](https://reactjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
- [Albania Geographic Data](https://www.openstreetmap.org/)

## 🆘 Getting Help

- Check existing issues on GitHub
- Create a new issue with detailed description
- Join discussions in project discussions
- Contact maintainers for urgent issues

---

Happy coding! 🚀