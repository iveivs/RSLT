import { useState, useEffect } from "react"

export const Footer = () => {
    const [ city, setCity] = useState('')
    const [ temperature, setTemperature] = useState('')
    const [ weather, setWeather] = useState('')
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=48bdddcf51b8a08cee24ea21e0ce45d0')
        .then((res)=> res.json())
        .then(({name, main, weather}) => {
            setCity(name)
            setTemperature(Math.round(main.temp))
            setWeather(weather[0].description)
        })
    },[])
    return (
        <div>
            <div>
                <div>Web developer blog</div>
                <div>vew@developer.com</div>
            </div>
            <div>
                <div>{city}</div>
                <div>{temperature} градусов,</div>
                <div></div>
            </div>
        </div>
    )
}