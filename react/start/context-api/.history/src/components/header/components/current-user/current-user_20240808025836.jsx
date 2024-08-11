import { useContext } from "react"
import AppContex
export const CurrentUser = ({ currentUser}) => {
    const {} = useContext{AppContext}
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}