import { sessions } from "../sessions"
import { getRoles } from "../api"
import { ROLE } from '../constants'

export const fetchRoles = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]
    console.log('userSes Roles', userSession);
    if (!sessions.access(userSession, accessRoles)) {
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