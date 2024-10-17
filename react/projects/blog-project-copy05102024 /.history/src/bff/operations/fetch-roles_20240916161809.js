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

    const roles = await getRoles(regLogin, regPassword)

    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
            session: sessions.create(user),
        },
    }
}