import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by
          <a href="#" target="_blank">
            Angelique Hilario
          </a>{" "}
          and is{""}
          <a href="#" target="_blank">
            Open-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
