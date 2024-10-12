import { useState, useEffect } from "react"

export const Footer = () => {
    const [ city, setCity] = useState('')
    const [ temperature, setTemperature] = useState()
    const [ ] = useState()
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=48bdddcf51b8a08cee24ea21e0ce45d0')
        .then((res)=> res.json())
        .then(({name, main, weather}) => {

        })
    },[])
    return (
        <div>

        </div>
    )
}