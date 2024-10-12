import { useEffect } from "react"

export const Footer = () => {
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&lat={lat}&lon={lon}&appid={API key}')
    },[])
    return (
        <div>

        </div>
    )
}