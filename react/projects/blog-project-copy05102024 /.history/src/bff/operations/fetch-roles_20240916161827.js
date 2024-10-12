import { sessions } from "../sessions"
import { addUser, getUser } from "../api"

export const fetchRoles = async () => {
    const existedUser = await getUser(regLogin)

    if (existedUser) {
        return {
            error: 'Такой пользователь уже занят',
            res: null
        }
    }

    const roles = await getRoles()

    return {
        error: null,
        res: role
    }
}