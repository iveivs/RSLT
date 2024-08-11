import { useContext } from "react"
export const CurrentUser = ({ currentUser}) => {
    const {} = useContext{AppCo}
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}