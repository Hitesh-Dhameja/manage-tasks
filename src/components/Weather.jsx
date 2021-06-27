import React from 'react'
import { useState } from 'react'
import WeatherCard from './WeatherCard'

const Weather = () => {
    const [city, setCity] = useState('')
    const [sendData, setSendData] = useState('')
    const apiKey = '84ac334d454d0b42fff4f10bbc911f14'
    const findTemp = (e) => {
        e.preventDefault()
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        async function getWeather(url) {
            const response = await fetch(url);
            var data = await response.json();
            data = JSON.parse(JSON.stringify(data))
            const country = data.sys.country
            const temperature = data.main.temp
            const pressure = data.main.pressure
            const humidity = data.main.humidity
            const speed = data.wind.speed
            const icon = data.weather[0].icon
            setSendData({ city, country, temperature, pressure, humidity, speed, icon })
        }
        getWeather(url);


    }


    return (
        <div class="container mx-3">
            <form class="form-inline my-4 d-inline-flex" onSubmit={findTemp}>
                <input class="form-control mr-sm-2" type="search" placeholder="Enter Your City" aria-label="Search"
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }} />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <WeatherCard sendData={sendData} />
        </div>
    )
}

export default Weather
