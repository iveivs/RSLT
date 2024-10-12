import { useSelector } from "react-redux"
import { server } from "../bff"
import { selectUserSession } from "../selectors"
export const useServer = (operation, ...params) => {
    const session = useSelector(selectUserSession)

    return server[operation](session, ...params)
}