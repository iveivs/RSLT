import { useSelector } from "react-redux"
import { server } from "../bff"
import { selectUserSession } from "../selectors"
export const useServer = (operation, payload) => {
    const session = useSelector(selectUserSession)

    return server
}