// import { sessions } from "../sessions"
import { getRoles, getUser } from "../api"
import { ROLE } from '../constants'

export const fetchRoles = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]
    const existedUser = await getUser(regLogin)

    if (!session.access(userSession, accessRoles)) {
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