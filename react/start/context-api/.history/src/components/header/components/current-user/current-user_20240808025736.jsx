import { useContext } from "react"
export const CurrentUser = ({ currentUser}) => {
    
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}