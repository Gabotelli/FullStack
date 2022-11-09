import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => setWeather(response.data))
    },[country.latlng])

    if(weather!=null) {
        return (
            <div>
                <h3>Weather in {country.capital}</h3>
                <p>Temperature: {(weather.main.temp-273).toFixed(2)} Celcius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={country.capital} />
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
        )
    }
}

export default Weather