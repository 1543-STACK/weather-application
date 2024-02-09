import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });

    setReady(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="type a city.."
              className=" search-bar w-80"
              onChange={handleCity}
            />
            <input type="submit" value="search" className="search-btn w-20" />
          </form>
          <WeatherInfo data={weatherData} />

          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
