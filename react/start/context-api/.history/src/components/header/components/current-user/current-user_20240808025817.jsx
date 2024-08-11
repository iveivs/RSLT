import { useContext } from "react"
export const CurrentUser = ({ currentUser}) => {
    const {} = <useContext>AppContext</useContext>
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}