import { useState } from 'react';
import './App.css';

/**
 * Weather App - Tutorial Example
 *
 * A simple React app using the APIVerve Weather API.
 * https://apiverve.com/marketplace/weatherforecast
 */

// ============================================
// CONFIGURATION - Add your API key here
// Get a free key at: https://dashboard.apiverve.com
// ============================================
const API_KEY = 'your-api-key-here';
const API_URL = 'https://api.apiverve.com/v1/weatherforecast';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    if (API_KEY === 'your-api-key-here') {
      setError('Add your API key to src/App.jsx first');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(`${API_URL}?city=${encodeURIComponent(city)}`, {
        method: 'GET',
        headers: {
          'x-api-key': API_KEY
        }
      });

      const data = await response.json();

      if (data.status === 'ok') {
        setWeather(data.data);
      } else {
        setError(data.error || 'Failed to fetch weather');
      }
    } catch (err) {
      setError('Failed to fetch weather. Check your API key.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <p className="subtitle">Get current weather for any city</p>

        <form onSubmit={fetchWeather}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name (e.g., San Francisco)"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {weather && (
          <div className="weather-card">
            <div className="temp">
              <span className="temp-value">{Math.round(weather.tempF)}</span>
              <span className="temp-unit">°F</span>
            </div>
            <div className="temp-celsius">
              {Math.round(weather.tempC)}°C
            </div>

            <div className="details">
              <div className="detail">
                <span className="label">Feels Like</span>
                <span className="value">{Math.round(weather.feelslikeF)}°F</span>
              </div>
              <div className="detail">
                <span className="label">Wind</span>
                <span className="value">{weather.windMph} mph {weather.windDir}</span>
              </div>
              <div className="detail">
                <span className="label">Humidity</span>
                <span className="value">{weather.humidity || 'N/A'}%</span>
              </div>
              <div className="detail">
                <span className="label">Visibility</span>
                <span className="value">{weather.visMiles} mi</span>
              </div>
              <div className="detail">
                <span className="label">Pressure</span>
                <span className="value">{weather.pressureIn} in</span>
              </div>
              <div className="detail">
                <span className="label">Gusts</span>
                <span className="value">{weather.gustMph} mph</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
