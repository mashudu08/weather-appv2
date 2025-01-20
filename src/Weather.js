import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

export default function Weather() {
  return (
    <div>
      <div className="weather-app">
        <Header />
        <br />
        <div className="weather-app-data">
          <div>
            <h1 className="current-city" id="current-city">
              Paris
            </h1>
            <p className="current-details">
              <span id="current-date">Tuesday 17:47</span>, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div className="current-temperature-icon" id="icon">
              ☀️
            </div>
            <div className="weather-app-temperature" id="temperature">
              24
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <Footer />
    </div>
  );
}
