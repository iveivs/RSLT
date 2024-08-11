import { CurrentUser } from "./components"
export const Header = ({ name, currentUser }) => {
    console.log('currentUser', currentUser);
    console.log('name', name);
    return (
        <>
        <h2>Информация в шапке приложения</h2>
        <CurrentUser  currentUser={currentUser} />
        </>
    )
}