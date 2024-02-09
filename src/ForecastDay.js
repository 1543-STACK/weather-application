import React from "react";
import Icon from "./Icon";
import "./WeatherForecast.css";
export default function ForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);

    return `${minTemp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="row days">
        <div className="col-2">{day()}</div>
      </div>
      <div className="row icons">
        <div className="col-2">
          <Icon code={props.data.weather[0].icon} />
        </div>
      </div>
      <div className="row temperature">
        <div className="col-2">
          <span className="min">{minTemp()}</span>/
          <span className="max">{maxTemp()}</span>
        </div>
      </div>
    </div>
  );
}
