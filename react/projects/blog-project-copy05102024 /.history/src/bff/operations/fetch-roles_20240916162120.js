import { sessions } from "../sessions"
import { get, getUser } from "../api"

export const fetchRoles = async () => {
    const existedUser = await getUser(regLogin)

    if (existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: null
        }
    }

    const roles = await getRoles()

    return {
        error: null,
        res: roles,
    }
}