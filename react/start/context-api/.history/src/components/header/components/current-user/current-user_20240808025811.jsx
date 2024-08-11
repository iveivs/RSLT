import { useContext } from "react"
export const CurrentUser = ({ currentUser}) => {
    const {} = useContext{AppContex}
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}