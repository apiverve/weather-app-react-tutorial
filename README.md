# Weather App | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](https://vitejs.dev)
[![APIVerve | Weather](https://img.shields.io/badge/APIVerve-Weather-purple)](https://apiverve.com/marketplace/weatherforecast?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial)

A clean, responsive weather app built with React. Enter any city and get real-time weather data including temperature, wind, humidity, and more.

![Screenshot](https://raw.githubusercontent.com/apiverve/weather-app-react-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial)** - no credit card required.

---

## Features

- Real-time weather data for any city worldwide
- Temperature in both Fahrenheit and Celsius
- Wind speed, direction, and gusts
- Visibility and atmospheric pressure
- Clean, modern UI with responsive design
- Built with React 18 and Vite for fast development

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/weather-app-react-tutorial.git
   cd weather-app-react-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `.env` and add your API key:
   ```
   VITE_API_KEY=your-api-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit http://localhost:5173 and search for a city!

## Project Structure

```
weather-app-react-tutorial/
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── .env                # Environment variables (add your API key)
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User enters a city name in the search box
2. React captures the input and calls the Weather API
3. API returns current weather conditions
4. Component re-renders with the weather data
5. Temperature and details are displayed in a clean card layout

### The API Call

```javascript
const response = await fetch(`${API_URL}?city=${encodeURIComponent(city)}`, {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY
  }
});
```

## API Reference

**Endpoint:** `GET https://api.apiverve.com/v1/weatherforecast`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | Yes | City name (e.g., "San Francisco") |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "tempC": 15.6,
    "tempF": 60.1,
    "feelslikeC": 15.6,
    "feelslikeF": 60.1,
    "windMph": 4.9,
    "windKph": 7.9,
    "windDir": "NW",
    "pressureMb": 1021,
    "pressureIn": 30.16,
    "visKm": 16,
    "visMiles": 9,
    "gustMph": 6.6,
    "gustKph": 10.5
  }
}
```

## Customization Ideas

- Add weather icons based on conditions
- Show 5-day forecast (use a forecast API)
- Add location auto-detection with Geolocation API
- Save favorite cities to localStorage
- Add unit toggle (°F/°C)
- Display weather background images

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial):

- [Air Quality](https://apiverve.com/marketplace/airquality?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - Get air quality index for any location
- [Sunrise/Sunset](https://apiverve.com/marketplace/sunrisesunset?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - Get sunrise and sunset times
- [IP Lookup](https://apiverve.com/marketplace/iplookup?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - Auto-detect user location

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - Browse 300+ APIs
- [Weather API](https://apiverve.com/marketplace/weatherforecast?utm_source=github&utm_medium=tutorial&utm_campaign=weather-app-react-tutorial) - API details
