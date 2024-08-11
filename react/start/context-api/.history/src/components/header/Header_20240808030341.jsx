import { CurrentUser } from "./components"
export const Header = () => {
    return (
        <>
        <h2>Информация в шапке приложения</h2>
        <CurrentUser  currentUser={currentUser} />
        </>
    )
}