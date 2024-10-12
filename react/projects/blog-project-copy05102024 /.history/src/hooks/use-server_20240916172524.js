import { useSelector } from "react-redux"
import { server } from "../bff"
import { selectUserSession } from "../selectors"
export const useServer = (operation, ...params) => {
    const session = useSelector(selectUserSession)

    const request = ['register', 'authorize'].includes(operation)
    ? params
    : [session, ]

    return server[operation](session, ...params)
}