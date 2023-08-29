import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> New York</h1>
      <ul>
        <li> Friday </li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="mostly cloudly" />
          6c
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 13%</li>
            <li>Humidity:16%</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
