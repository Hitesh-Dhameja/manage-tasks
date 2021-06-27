import React from 'react'

const WeatherCard = (props) => {
    const source = `http://openweathermap.org/img/w/${props.sendData.icon}.png`
    return (
        <div class="container d-flex justify-content-center">
            <div class="card" style={{ width: '18rem' }}>
                <img src={source} class="card-img-top" alt="..." height="80rem" />
                <div class="card-body">
                    <h5 class="card-title">{props.city}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Country : {props.sendData.country}</li>
                    <li class="list-group-item">Temperature : {props.sendData.temperature} <span>&#176;</span>C</li>
                    <li class="list-group-item">Pressure : {props.sendData.pressure} Pa</li>
                    <li class="list-group-item">Humidity : {props.sendData.humidity} g/m^3</li>
                    <li class="list-group-item">Wind Speed : {props.sendData.speed} m/s</li>
                </ul>

            </div>
        </div>
    )
}

export default WeatherCard
