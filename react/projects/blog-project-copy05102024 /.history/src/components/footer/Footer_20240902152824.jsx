import { useEffect } from "react"

export const Footer = () => {
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=48bdddcf51b8a08cee24ea21e0ce45d0').then((data)=> data.json).then
    },[])
    return (
        <div>

        </div>
    )
}