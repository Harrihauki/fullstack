import { useEffect, useState } from 'react';
import weatherService from '../services/weather'
import WeatherIcon from './WeatherIcon';

const Weather = (props) => {
    const [temperature, setTemperature] = useState(null)
    const [wind, setWind] = useState(null)
    const [weatherIcon, setWeatherIcon] = useState(null)
    
    console.log("päästiin weatheriin");
    console.log(props);
    
    useEffect(() => {
        weatherService
            .getWeather(props.latitude, props.longitude)
            .then(response => {
                console.log("use effect weatherissa täynnä");

                setTemperature(response.main.temp)
                setWind(response.wind.speed)
                setWeatherIcon(response.weather[0].icon)
            })
    }, [])

    return (
        <div>
            <h2>Weather in {props.capital}</h2>
            <div>temperature {temperature} Celsius</div>
            <WeatherIcon id={weatherIcon} />
            <div>wind {wind}</div>
        </div>
    )
}

export default Weather