import { CurrentUser } from "./components"
export const Header = ({ currentUser }) => {
    console.log();
    return (
        <>
        <h2>Информация в шапке приложения</h2>
        <CurrentUser  currentUser={currentUser} />
        </>
    )
}