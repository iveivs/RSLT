import { store } from '../../../../'
export const CurrentUser = () => {
    const {name} = store.getState()
    return (
        <div>
            <div>Текущий пользователь {name} </div>
        </div>
    )
}