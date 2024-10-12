import { useState, useEffect } from "react"
import styled from "styled-components";



export const FooterContainer = ( { className }) => {
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
        <div className={className}>
            <div>
                <div>Web developer blog</div>
                <div>vew@developer.com</div>
            </div>
            <div>
                <div>{city} {new Date().toLocaleString('ru', {day:})}</div>
                <div>{temperature} градусов, {weather}</div>
            </div>
        </div>
    )
}

export const Footer = styled(FooterContainer)`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 1000px; 
    height: 120px;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0px 2px 17px #000;
    font-weigth: bold;
`