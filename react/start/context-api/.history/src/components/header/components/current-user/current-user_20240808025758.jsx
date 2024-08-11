import { useContext } from "react"
export const CurrentUser = ({ currentUser}) => {
    const {} = useContext{App}
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}