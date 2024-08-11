import { CurrentUser } from "./components"
export const Header = ({ urrentUser }) => {
    console.log('name', name);
    console.log('currentUser', currentUser);
    return (
        <>
        <h2>Информация в шапке приложения</h2>
        <CurrentUser  currentUser={currentUser} />
        </>
    )
}