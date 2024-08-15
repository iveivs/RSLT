import { store } from '../../../../store'
export const CurrentUser = () => {
    const {name} = store.getState()
    console.log(object);
    return (
        <div>
            <div>Текущий пользователь {name} </div>
        </div>
    )
}