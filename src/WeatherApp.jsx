import { useState } from "react";
import "./WeatherApp.css";
import SearchForm from "./components/SearchForm";

export const WeatherApp = () => {
  return (
    <div className="container">
      <h1>Aplicación de Clima</h1>
      <SearchForm />
    </div>
  );
};
