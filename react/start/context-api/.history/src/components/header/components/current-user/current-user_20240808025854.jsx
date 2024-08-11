import { useContext } from "react"
import { AppContext } from "../../../../context"
export const CurrentUser = () => {
    const {} = useContext{AppContext}
    return (
        <div>
            <div>Текущий пользователь {currentUser} </div>
        </div>
    )
}