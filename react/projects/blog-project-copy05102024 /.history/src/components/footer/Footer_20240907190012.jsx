import { useState, useEffect } from "react"
import styled from "styled-components";

// 2d0e848e05679623b697a492507d85ff
// df55727c95b994213e12e05526685c57
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=48bdddcf51b8a08cee24ea21e0ce45d0')
console.log('TEST');

export const FooterContainer = ( { className }) => {
    const [ city, setCity] = useState('')
    const [ temperature, setTemperature] = useState('')
    const [ weather, setWeather] = useState('')
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=df55727c95b994213e12e05526685c57')
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
                <div>{city}, {new Date().toLocaleString('ru', {day: 'numeric', month: 'long'})}</div>
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
    font-weight: bold;
`