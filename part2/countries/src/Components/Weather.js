import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([])
    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat='.concat({lat}).concat('&lon=').concat({lon}).concat('&exclude=').concat({part}).concat('&appid=').concat({api_key})
    useEffect(() => {
        axios
            .get(url)
            .then(response => setWeather(response.data))
    },[])
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.current.temp}</p>
            <img src={weather.icon} />
            <p>Wind: {weather.current.wind}</p>
        </div>
    )
}

export default Weather