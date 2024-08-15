import { store } from '../../../../store'
export const CurrentUser = () => {
    const {name} = store.getState()
    console.log(name);
    return (
        <div>
            <div>Текущий пользователь {name} </div>
        </div>
    )
}