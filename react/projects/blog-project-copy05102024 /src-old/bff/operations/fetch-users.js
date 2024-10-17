import { sessions } from "../sessions"
import { getUsers } from "../api"
import { ROLE } from '../constants'

export const fetchUsers = async (hash) => {
    const accessRoles = [ROLE.ADMIN]

    // if (!sessions.access(userSession, accessRoles)) {
    //     return {
    //         error: 'Доступ запрещён',
    //         res: null
    //     }
    // }
    const access = await sessions.access(hash, accessRoles)

    if (!access) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    const users = await getUsers()

    return {
        error: null,
        res: users,
    }
}
