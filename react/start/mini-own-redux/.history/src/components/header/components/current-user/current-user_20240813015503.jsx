import { store } from '../../../../store'
export const CurrentUser = () => {
    const {name} = store.getState()
    console.log('NAME',name);
    return (
        <div>
            {/* <div>Текущий пользователь {name ? {name} : null} </div> */}
            <div>Текущий пользователь {name ? {name} : null} </div>
        </div>
    )
}