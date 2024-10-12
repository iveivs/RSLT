import { sessions } from "../sessions"
import { getRoles, getUser } from "../api"

export const fetchRoles = async () => {
    const existedUser = await getUser(regLogin)

    if () {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    const roles = await getRoles()

    return {
        error: null,
        res: roles,
    }
}