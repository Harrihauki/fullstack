import axios from "axios";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"

const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY

const getWeather = (latitude, longitude) => {
    const request = axios.get(`${baseURL}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
}

export default {getWeather}