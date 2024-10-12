// import { sessions } from "../sessions"
import { getRoles, getUser } from "../api"
import {ROL}

export const fetchRoles = async (userSession) => {
    const access = []
    const existedUser = await getUser(regLogin)

    if (!checkAccess(userSession)) {
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