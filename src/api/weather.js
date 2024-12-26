const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5e70802dcb37bbfbf30191834d27d9d6";

export const fetchWeatherData = async (city, setWeatherData) => {
  try {
    const response = await fetch(
      `${urlBase}?q=${city}&appid=${API_KEY}&lang=es`
    );
    const data = await response.json();
    setWeatherData(data);
  } catch (error) {
    console.error("Ha habido un error: ", error);
  }
};
