import { useSelector } from "react-redux"
import { useCall}
import { server } from "../bff"
import { selectUserSession } from "../selectors"
export const useServerRequest = () => {
    const session = useSelector(selectUserSession)

    return (operation, ...params) => {
        const request = ['register', 'authorize'].includes(operation)
            ? params
            : [session, ...params]

        return server[operation](...request)
    }
}