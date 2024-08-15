import { store } from '../../../../store'
export const CurrentUser = () => {
    const {name} = useContext(AppContext)
    return (
        <div>
            <div>Текущий пользователь {name} </div>
        </div>
    )
}